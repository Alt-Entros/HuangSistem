<script setup></script>

<template>
  <div class="grid grid-cols-4 fot mt-10 m-5">
    <router-link to="/" active-class="text-white" class="transition duration-300">
      <svg width="31" height="34" viewBox="0 0 31 34" fill="" xmlns="http://www.w3.org/2000/svg">
        <rect y="13.3043" width="4.02962" height="20.6957" rx="2" fill="currentColor" />
        <rect
          width="4.24568"
          height="20.8215"
          rx="2"
          transform="matrix(0.683568 0.729887 -0.744675 0.667427 15.5052 0)"
          fill="currentColor"
        />
        <rect
          width="4.02962"
          height="20.6957"
          rx="2"
          transform="matrix(-1 0 0 1 31 13.3043)"
          fill="currentColor"
        />
        <rect
          x="1.51111"
          y="34"
          width="3.94203"
          height="28.2074"
          rx="1.97101"
          transform="rotate(-90 1.51111 34)"
          fill="currentColor"
        />
        <rect
          width="4.24568"
          height="20.8215"
          rx="2"
          transform="matrix(-0.683568 0.729887 0.744675 0.667427 15.4948 0)"
          fill="currentColor"
        />
      </svg>
    </router-link>
    <router-link to="/device" active-class="text-white" class="transition duration-300">
      <svg
        width="33"
        height="34"
        viewBox="0 0 33 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.5 13.5C24.5 20.1813 19.2984 25.5 13 25.5C6.70158 25.5 1.5 20.1813 1.5 13.5C1.5 6.81872 6.70158 1.5 13 1.5C19.2984 1.5 24.5 6.81872 24.5 13.5Z"
          stroke="currentColor"
          stroke-width="3"
        />
        <rect
          width="3.8885"
          height="15.8143"
          rx="1.94425"
          transform="matrix(-0.658419 0.752652 0.72156 0.692352 21.5891 20.1199)"
          fill="currentColor"
        />
      </svg>
    </router-link>
    <router-link to="/catalog" active-class="text-white" class="transition duration-300">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="1.5"
          width="12"
          height="12"
          rx="2.5"
          stroke="currentColor"
          stroke-width="3"
        />
        <rect
          x="1.5"
          y="18.5"
          width="12"
          height="12"
          rx="2.5"
          stroke="currentColor"
          stroke-width="3"
        />
        <rect
          x="18.5"
          y="1.5"
          width="12"
          height="12"
          rx="2.5"
          stroke="currentColor"
          stroke-width="3"
        />
        <path d="M21.5 27.5V21.5H27.5V27.5H21.5Z" stroke="currentColor" stroke-width="9" />
      </svg>
    </router-link>
    <router-link to="/setting" active-class="text-white" class="transition duration-300">
      <svg
        width="32"
        height="36"
        viewBox="0 0 32 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.449 3.38726C12.7379 -1.12909 19.1385 -1.12909 20.4274 3.38726V3.38726C21.1188 5.80997 23.6078 7.24701 26.0517 6.63443V6.63443C30.6074 5.49248 33.8077 11.0355 30.5408 14.4099V14.4099C28.7884 16.2201 28.7884 19.0941 30.5408 20.9043V20.9043C33.8077 24.2787 30.6074 29.8217 26.0517 28.6798V28.6798C23.6078 28.0672 21.1188 29.5042 20.4274 31.9269V31.9269C19.1385 36.4433 12.7379 36.4433 11.449 31.9269V31.9269C10.7576 29.5042 8.2686 28.0672 5.82478 28.6798V28.6798C1.26905 29.8217 -1.93123 24.2787 1.33559 20.9043V20.9043C3.08801 19.0941 3.08801 16.2201 1.33559 14.4099V14.4099C-1.93123 11.0355 1.26905 5.49248 5.82478 6.63443V6.63443C8.2686 7.24701 10.7576 5.80997 11.449 3.38726V3.38726Z"
          fill="currentColor"
        />
        <path
          d="M12.4183 10.6792C14.5979 9.42708 17.2786 9.42708 19.4583 10.6792C21.5927 12.0744 22.9065 14.4283 22.9735 16.9774L22.9783 17.1571L22.9735 17.3367C22.9065 19.8858 21.5927 22.2397 19.4583 23.635C17.2786 24.8871 14.5979 24.8871 12.4183 23.635C10.2838 22.2397 8.97003 19.8858 8.90298 17.3367L8.89825 17.1571L8.90298 16.9774C8.97003 14.4283 10.2838 12.0744 12.4183 10.6792Z"
          fill="black"
        />
      </svg>
    </router-link>
  </div>
</template>

<style scoped>
.fot {
  gap: 4.5rem;
}
</style>
