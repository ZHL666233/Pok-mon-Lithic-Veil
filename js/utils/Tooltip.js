export class Tooltip {
    static isControlActive = false;

    constructor(parentElement, data) {
        this.parentElement = parentElement;
        this.data = data;
        this.element = null;

        this.handleControlToggle = this.handleControlToggle.bind(this);
        this.positionTooltip = this.positionTooltip.bind(this);
        this.showTooltip = this.showTooltip.bind(this);
        this.hideTooltip = this.hideTooltip.bind(this);

        this.parentElement.addEventListener("mouseenter", this.showTooltip);
        this.parentElement.addEventListener("mouseleave", this.hideTooltip);
        this.parentElement.addEventListener("click", this.hideTooltip);
    }

    showTooltip() {
        if (this.element) return;

        this.element = document.createElement("div");
        this.element.className = "tooltip";
        this.generateContent();
        document.getElementById('screen').appendChild(this.element);

        this.parentElement.addEventListener("mousemove", this.positionTooltip);
        document.addEventListener("keydown", this.handleControlToggle);
    }

    hideTooltip() {
        if (this.element) {
            this.element.remove();
            this.element = null;
        }

        this.parentElement.removeEventListener("mousemove", this.positionTooltip);
        document.removeEventListener("keydown", this.handleControlToggle);
    }

    generateContent() {
        this.element.innerHTML = this.data;
    }

    positionTooltip(event) {
        if (!this.element || !event) return;

        const offset = 15;
        const { clientX: mouseX, clientY: mouseY } = event;

        const screen = document.getElementById('screen');
        const screenRect = screen.getBoundingClientRect();
        // La escala real ahora viene del transform aplicado a #screen,
        // así que la calculamos usando el tamaño visual (getBoundingClientRect)
        // frente al tamaño lógico (clientWidth / clientHeight).
        const scaleX = screenRect.width / screen.clientWidth;
        const scaleY = screenRect.height / screen.clientHeight;
        const scale = Math.min(scaleX, scaleY) || 1;

        const relativeX = (mouseX - screenRect.left) / scale;
        const relativeY = (mouseY - screenRect.top) / scale;

        const tooltipWidth = this.element.offsetWidth;
        const tooltipHeight = this.element.offsetHeight;

        let left = relativeX + offset;
        let top = relativeY + offset;

        const screenWidth = screen.clientWidth;
        const screenHeight = screen.clientHeight;

        if (left + tooltipWidth > screenWidth) {
            left = relativeX - tooltipWidth - (offset / 2);
        }
        if (top + tooltipHeight > screenHeight) {
            top = relativeY - tooltipHeight;
        }

        this.element.style.position = 'absolute';
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
    }

    handleControlToggle(event) {
        Tooltip.isControlActive = !Tooltip.isControlActive;
        this.hideTooltip();
    }
}
