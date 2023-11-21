
export default function matieUrlFor(imageUrl: any) {
  // image-f4bebfdf5800e4eb1213c6a629bd81fc094232aa-800x600-png
  // https://cdn.sanity.io/images/a8ep10pk/production/68b9be602a95227490b5214a51e45bf42f5ad51f-1200x1200.png
  // https://cdn.sanity.io/images/a8ep10pk/production/e59f2fe76aa1600e4b31b3d538575163b1927bd2-1667x2500.png

  try {
    const ref = imageUrl.asset._ref
    const [type, _id, dimensions, format] = ref.split('-')

    if (type === 'image') {
        const url = `https://cdn.sanity.io/images/a8ep10pk/production/${_id}-${dimensions}.${format}`
        return url
    } else throw new Error("object must be an image")
  } catch (error: any) {
    console.log(error)
  }

}
