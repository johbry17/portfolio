/*!
 * Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
 */
window.addEventListener("DOMContentLoaded", () => {
  let scrollPos = 0;
  const mainNav = document.getElementById("mainNav");
  const headerHeight = mainNav.clientHeight;
  window.addEventListener("scroll", function () {
    const currentTop = document.body.getBoundingClientRect().top * -1;
    if (currentTop < scrollPos) {
      // Scrolling Up
      if (currentTop > 0 && mainNav.classList.contains("is-fixed")) {
        mainNav.classList.add("is-visible");
      } else {
        console.log(123);
        mainNav.classList.remove("is-visible", "is-fixed");
      }
    } else {
      // Scrolling Down
      mainNav.classList.remove(["is-visible"]);
      if (
        currentTop > headerHeight &&
        !mainNav.classList.contains("is-fixed")
      ) {
        mainNav.classList.add("is-fixed");
      }
    }
    scrollPos = currentTop;
  });

  // ───── ADDITIONAL JS, beyond Bootstrap defaults ───────────────────────────────────────────

  // ──── automatically update the year in the footer ─────────────────────────────────────────
  const yearElement = document.getElementById("copyright-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ──── smooth scroll to top when clicking "Back to Top" links ─────────────────────────────
  document.querySelectorAll('a[href="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // ──── Image Lightbox ─────────────────────────────────────────────────────────────────────
  const lightboxTriggers = document.querySelectorAll("[data-lightbox]");
  if (lightboxTriggers.length > 0) {
    initializeImageLightbox();
  }

  function initializeImageLightbox() {
    const dialog = document.createElement("dialog");
    dialog.className = "image-lightbox";
    dialog.setAttribute("aria-labelledby", "image-lightbox-title");
    dialog.innerHTML = `
      <div class="image-lightbox-panel">
        <header class="image-lightbox-header">
          <h2 class="image-lightbox-title" id="image-lightbox-title"></h2>
          <button class="image-lightbox-close" type="button" aria-label="Close image dialog">
            <span aria-hidden="true">&times;</span>
          </button>
        </header>
        <div class="image-lightbox-body">
          <div class="image-lightbox-viewport" aria-live="polite">
            <img class="image-lightbox-image" alt="" draggable="false" />
            <p class="image-lightbox-status" hidden>Loading image…</p>
          </div>
          <p class="image-lightbox-caption"></p>
        </div>
        <footer class="image-lightbox-footer">
          <div class="image-lightbox-controls" role="group" aria-label="Image zoom controls">
            <button class="image-lightbox-btn" type="button" data-zoom="out" aria-label="Zoom out">−</button>
            <button class="image-lightbox-btn" type="button" data-zoom="in" aria-label="Zoom in">+</button>
            <button class="image-lightbox-btn" type="button" data-zoom="reset" aria-label="Reset zoom to fit">Fit</button>
            <span class="image-lightbox-zoom" aria-live="polite">100%</span>
          </div>
          <a class="image-lightbox-fullsize" target="_blank" rel="noopener">Open full size</a>
        </footer>
      </div>
    `;
    document.body.append(dialog);

    if (typeof dialog.showModal !== "function") {
      return;
    }

    const titleElement = dialog.querySelector(".image-lightbox-title");
    const closeButton = dialog.querySelector(".image-lightbox-close");
    const viewportElement = dialog.querySelector(".image-lightbox-viewport");
    const imageElement = dialog.querySelector(".image-lightbox-image");
    const statusElement = dialog.querySelector(".image-lightbox-status");
    const captionElement = dialog.querySelector(".image-lightbox-caption");
    const zoomValueElement = dialog.querySelector(".image-lightbox-zoom");
    const zoomInButton = dialog.querySelector('[data-zoom="in"]');
    const zoomOutButton = dialog.querySelector('[data-zoom="out"]');
    const zoomResetButton = dialog.querySelector('[data-zoom="reset"]');
    const fullSizeLink = dialog.querySelector(".image-lightbox-fullsize");

    const activePointers = new Map();
    let pointerDragId = null;
    let pointerLastX = 0;
    let pointerLastY = 0;
    let pinchPrevDistance = null;
    let pinchPrevMidpoint = null;

    let loadToken = 0;
    let lastTrigger = null;
    let naturalWidth = 0;
    let naturalHeight = 0;
    let baseWidth = 0;
    let baseHeight = 0;
    let scale = 1;
    let minScale = 1;
    let maxScale = 5;
    let offsetX = 0;
    let offsetY = 0;
    let imageReady = false;

    const clamp = (value, minimum, maximum) =>
      Math.min(maximum, Math.max(minimum, value));

    const getPointerDistance = (pointA, pointB) =>
      Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y);

    const getPointerMidpoint = (pointA, pointB) => ({
      x: (pointA.x + pointB.x) / 2,
      y: (pointA.y + pointB.y) / 2,
    });

    function setStatus(message, isError = false) {
      statusElement.textContent = message;
      statusElement.hidden = message.length === 0;
      statusElement.classList.toggle("is-error", isError);
    }

    function clearPointerState() {
      activePointers.clear();
      pointerDragId = null;
      pinchPrevDistance = null;
      pinchPrevMidpoint = null;
    }

    function applyTransform() {
      imageElement.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
      zoomValueElement.textContent = `${Math.round(scale * 100)}%`;
      zoomInButton.disabled = !imageReady || scale >= maxScale - 0.001;
      zoomOutButton.disabled = !imageReady || scale <= minScale + 0.001;
      zoomResetButton.disabled =
        !imageReady ||
        (Math.abs(scale - minScale) < 0.001 &&
          Math.abs(offsetX) < 0.5 &&
          Math.abs(offsetY) < 0.5);
    }

    function clampPanToBounds() {
      if (!imageReady) {
        offsetX = 0;
        offsetY = 0;
        return;
      }

      const viewportWidth = viewportElement.clientWidth;
      const viewportHeight = viewportElement.clientHeight;
      const renderedWidth = baseWidth * scale;
      const renderedHeight = baseHeight * scale;

      const maxOffsetX = Math.max(0, (renderedWidth - viewportWidth) / 2);
      const maxOffsetY = Math.max(0, (renderedHeight - viewportHeight) / 2);

      offsetX = clamp(offsetX, -maxOffsetX, maxOffsetX);
      offsetY = clamp(offsetY, -maxOffsetY, maxOffsetY);
    }

    function resetView() {
      scale = minScale;
      offsetX = 0;
      offsetY = 0;
      clampPanToBounds();
      applyTransform();
    }

    function fitImageToViewport(resetPosition = false) {
      if (!imageReady || naturalWidth <= 0 || naturalHeight <= 0) {
        return;
      }

      const viewportWidth = viewportElement.clientWidth;
      const viewportHeight = viewportElement.clientHeight;
      if (viewportWidth <= 0 || viewportHeight <= 0) {
        return;
      }

      const previousBaseWidth = baseWidth;
      const previousBaseHeight = baseHeight;

      const fitScale = Math.min(
        viewportWidth / naturalWidth,
        viewportHeight / naturalHeight,
      );

      baseWidth = naturalWidth * fitScale;
      baseHeight = naturalHeight * fitScale;
      imageElement.style.width = `${baseWidth}px`;
      imageElement.style.height = `${baseHeight}px`;

      if (
        resetPosition ||
        previousBaseWidth === 0 ||
        previousBaseHeight === 0
      ) {
        scale = minScale;
        offsetX = 0;
        offsetY = 0;
      } else {
        const widthRatio = baseWidth / previousBaseWidth;
        const heightRatio = baseHeight / previousBaseHeight;
        offsetX *= widthRatio;
        offsetY *= heightRatio;
        scale = clamp(scale, minScale, maxScale);
      }

      clampPanToBounds();
      applyTransform();
    }

    function zoomToPoint(nextScale, clientX, clientY) {
      if (!imageReady) {
        return;
      }

      const clampedScale = clamp(nextScale, minScale, maxScale);
      if (Math.abs(clampedScale - scale) < 0.0005) {
        return;
      }

      const viewportRect = viewportElement.getBoundingClientRect();
      const viewportCenterX = viewportRect.left + viewportRect.width / 2;
      const viewportCenterY = viewportRect.top + viewportRect.height / 2;

      const pointX = clientX - viewportCenterX;
      const pointY = clientY - viewportCenterY;

      const imagePointX = (pointX - offsetX) / scale;
      const imagePointY = (pointY - offsetY) / scale;

      scale = clampedScale;
      offsetX = pointX - imagePointX * scale;
      offsetY = pointY - imagePointY * scale;

      clampPanToBounds();
      applyTransform();
    }

    function closeLightbox() {
      if (dialog.open) {
        dialog.close();
      }
    }

    function setImageLoadedState(isLoaded) {
      imageReady = isLoaded;
      if (!isLoaded) {
        zoomInButton.disabled = true;
        zoomOutButton.disabled = true;
        zoomResetButton.disabled = true;
      }
    }

    function beginImageLoad(imageUrl) {
      loadToken += 1;
      const currentLoadToken = loadToken;

      naturalWidth = 0;
      naturalHeight = 0;
      baseWidth = 0;
      baseHeight = 0;
      scale = minScale;
      offsetX = 0;
      offsetY = 0;

      setImageLoadedState(false);
      setStatus("Loading image…");
      zoomValueElement.textContent = `${Math.round(minScale * 100)}%`;
      dialog.setAttribute("aria-busy", "true");
      imageElement.removeAttribute("src");

      const sourceImage = new Image();
      sourceImage.decoding = "async";
      sourceImage.onload = () => {
        if (currentLoadToken !== loadToken) {
          return;
        }

        naturalWidth = sourceImage.naturalWidth;
        naturalHeight = sourceImage.naturalHeight;

        imageElement.src = imageUrl;
        dialog.removeAttribute("aria-busy");
        setImageLoadedState(true);
        setStatus("");
        fitImageToViewport(true);
      };
      sourceImage.onerror = () => {
        if (currentLoadToken !== loadToken) {
          return;
        }

        dialog.removeAttribute("aria-busy");
        setImageLoadedState(false);
        setStatus("Unable to load this image.", true);
      };
      sourceImage.src = imageUrl;
    }

    function openLightboxFromTrigger(triggerElement) {
      const imageUrl =
        triggerElement.getAttribute("data-lightbox-src") ||
        triggerElement.getAttribute("href");

      if (!imageUrl) {
        return;
      }

      lastTrigger = triggerElement;
      maxScale = clamp(
        Number.parseFloat(
          triggerElement.getAttribute("data-lightbox-max-zoom"),
        ) || 5,
        1.5,
        8,
      );

      titleElement.textContent =
        triggerElement.getAttribute("data-lightbox-title") ||
        triggerElement.textContent.trim() ||
        "Image preview";

      const fallbackAlt =
        triggerElement.getAttribute("aria-label") || titleElement.textContent;
      imageElement.alt =
        triggerElement.getAttribute("data-lightbox-alt") || fallbackAlt;
      captionElement.textContent =
        triggerElement.getAttribute("data-lightbox-description") || "";

      fullSizeLink.href = imageUrl;
      fullSizeLink.setAttribute(
        "aria-label",
        `Open full-size image in a new tab: ${titleElement.textContent}`,
      );

      clearPointerState();
      setStatus("");
      setImageLoadedState(false);

      if (!dialog.open) {
        dialog.showModal();
      }
      closeButton.focus();
      beginImageLoad(imageUrl);
    }

    function handleDialogClose() {
      clearPointerState();
      loadToken += 1;
      dialog.removeAttribute("aria-busy");
      imageElement.removeAttribute("src");
      setStatus("");
      setImageLoadedState(false);
      zoomValueElement.textContent = "100%";

      if (lastTrigger instanceof HTMLElement) {
        lastTrigger.focus();
      }
    }

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }
      const triggerElement = event.target.closest("[data-lightbox]");
      if (!(triggerElement instanceof HTMLElement)) {
        return;
      }

      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      event.preventDefault();
      openLightboxFromTrigger(triggerElement);
    });

    closeButton.addEventListener("click", closeLightbox);
    dialog.addEventListener("close", handleDialogClose);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        closeLightbox();
      }
    });
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      } else if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        const rect = viewportElement.getBoundingClientRect();
        zoomToPoint(
          scale * 1.2,
          rect.left + rect.width / 2,
          rect.top + rect.height / 2,
        );
      } else if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        const rect = viewportElement.getBoundingClientRect();
        zoomToPoint(
          scale / 1.2,
          rect.left + rect.width / 2,
          rect.top + rect.height / 2,
        );
      } else if (event.key === "0") {
        event.preventDefault();
        resetView();
      }
    });

    zoomInButton.addEventListener("click", () => {
      const rect = viewportElement.getBoundingClientRect();
      zoomToPoint(
        scale * 1.2,
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
      );
    });
    zoomOutButton.addEventListener("click", () => {
      const rect = viewportElement.getBoundingClientRect();
      zoomToPoint(
        scale / 1.2,
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
      );
    });
    zoomResetButton.addEventListener("click", resetView);

    viewportElement.addEventListener(
      "wheel",
      (event) => {
        if (!dialog.open || !imageReady) {
          return;
        }

        event.preventDefault();
        const zoomDelta = Math.exp(-event.deltaY * 0.0015);
        zoomToPoint(scale * zoomDelta, event.clientX, event.clientY);
      },
      { passive: false },
    );

    viewportElement.addEventListener("pointerdown", (event) => {
      if (!dialog.open || !imageReady) {
        return;
      }

      activePointers.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
      });

      viewportElement.setPointerCapture(event.pointerId);

      if (activePointers.size === 1) {
        pointerDragId = event.pointerId;
        pointerLastX = event.clientX;
        pointerLastY = event.clientY;
        pinchPrevDistance = null;
        pinchPrevMidpoint = null;
      } else if (activePointers.size === 2) {
        const [firstPointer, secondPointer] = Array.from(
          activePointers.values(),
        );
        pinchPrevDistance = getPointerDistance(firstPointer, secondPointer);
        pinchPrevMidpoint = getPointerMidpoint(firstPointer, secondPointer);
        pointerDragId = null;
      }

      event.preventDefault();
    });

    viewportElement.addEventListener("pointermove", (event) => {
      if (!activePointers.has(event.pointerId) || !dialog.open || !imageReady) {
        return;
      }

      activePointers.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
      });

      if (activePointers.size >= 2) {
        const [firstPointer, secondPointer] = Array.from(
          activePointers.values(),
        );
        const midpoint = getPointerMidpoint(firstPointer, secondPointer);
        const distance = getPointerDistance(firstPointer, secondPointer);

        if (pinchPrevDistance && distance > 0) {
          zoomToPoint(
            scale * (distance / pinchPrevDistance),
            midpoint.x,
            midpoint.y,
          );
          if (pinchPrevMidpoint) {
            offsetX += midpoint.x - pinchPrevMidpoint.x;
            offsetY += midpoint.y - pinchPrevMidpoint.y;
            clampPanToBounds();
            applyTransform();
          }
        }

        pinchPrevDistance = distance;
        pinchPrevMidpoint = midpoint;
        return;
      }

      if (
        activePointers.size === 1 &&
        pointerDragId === event.pointerId &&
        scale > minScale + 0.001
      ) {
        const deltaX = event.clientX - pointerLastX;
        const deltaY = event.clientY - pointerLastY;
        pointerLastX = event.clientX;
        pointerLastY = event.clientY;

        offsetX += deltaX;
        offsetY += deltaY;
        clampPanToBounds();
        applyTransform();
      }
    });

    const handlePointerEnd = (event) => {
      if (activePointers.has(event.pointerId)) {
        activePointers.delete(event.pointerId);
      }

      if (viewportElement.hasPointerCapture(event.pointerId)) {
        viewportElement.releasePointerCapture(event.pointerId);
      }

      if (activePointers.size === 1) {
        const [remainingPointerId, remainingPointer] = Array.from(
          activePointers.entries(),
        )[0];
        pointerDragId = remainingPointerId;
        pointerLastX = remainingPointer.x;
        pointerLastY = remainingPointer.y;
      } else {
        pointerDragId = null;
      }

      if (activePointers.size < 2) {
        pinchPrevDistance = null;
        pinchPrevMidpoint = null;
      }
    };

    viewportElement.addEventListener("pointerup", handlePointerEnd);
    viewportElement.addEventListener("pointercancel", handlePointerEnd);
    viewportElement.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse") {
        handlePointerEnd(event);
      }
    });

    const onViewportResize = () => {
      if (dialog.open && imageReady) {
        fitImageToViewport(false);
      }
    };

    window.addEventListener("resize", onViewportResize);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", onViewportResize);
    }
  }

  // ──── disabled, because I'd have to pay Formspree to cc the user ────────────────────────
  // ──── add event listener to the form submit button ────────────────────────────────
  // ──── to send a copy of the email to the user, if box is checked ────────────────────
  // document.getElementById('contactForm').addEventListener('submit', function (e) {
  //     const sendCopy = document.getElementById('sendCopy').checked;
  //     const userEmail = document.getElementById('email').value;
  //     const ccField = document.getElementById('ccEmail');

  //     if (sendCopy && userEmail) {
  //         ccField.value = userEmail;
  //     } else {
  //         ccField.value = ''; // clear it if unchecked
  //     }
  // });
});
