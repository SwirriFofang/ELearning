const files = import.meta.glob('./assets/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
})

export const img = (name) => files[`./assets/${name}`]