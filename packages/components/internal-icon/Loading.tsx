import { h, defineComponent } from 'vue'
export default defineComponent({
  name: 'Switcher',
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-dasharray="15"
          stroke-dashoffset="15"
          stroke-linecap="round"
          stroke-width="2"
          d="M12 3C16.9706 3 21 7.02944 21 12"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.3s"
            values="15;0"
          />
          <animateTransform
            attributeName="transform"
            dur="1.5s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          />
        </path>
      </svg>
    )
  }
})
