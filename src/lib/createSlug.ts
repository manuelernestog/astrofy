// Adapted from https://equk.co.uk/2023/02/02/generating-slug-from-title-in-astro/

export default function (title: string) {
    return (
      title
        // remove leading & trailing whitespace
        .trim()
        // output lowercase
         .toLowerCase()
        // replace spaces
        .replace(/\s+/g, '-')
        // remove special characters
        .replace(/[^\w-]/g, '')
        // remove leading & trailing separtors
        .replace(/^-+|-+$/g, '')
    )
  }
