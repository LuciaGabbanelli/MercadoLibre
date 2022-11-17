const formatNumber = (data) =>
  Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: data?.price?.currency,
  }).format(parseFloat(`${data?.price?.amount}.${data?.price?.decimals}`))

export default formatNumber
