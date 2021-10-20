// import { saveAs } from 'file-saver'

/**
 * Uploads a file
 */
/*
export async function upload(): Promise<any> {
  return new Promise((resolve) => {
    let input = document.createElement('input')

    input.type = 'file'
    input.onchange = (event) => {
      // @ts-ignore todo
      let file = event.target.files[0]
      let reader = new FileReader()

      reader.readAsText(file, 'utf-8')
      reader.onload = (readerEvent) => {
        resolve(readerEvent.target.result)
      }
    }

    input.click()
  })
}
*/

/**
 * Downloads a file
 *
 * @param contents
 * @param filename
 * @param type
 */
/*
export async function download(contents: any, filename: string, type: string): Promise<void> {
  saveAs(new Blob([contents], { type }), filename)
}
*/

/**
 * Gets file contents
 *
 * @param file
 */
/*
export async function getContents(file: File): Promise<string | ArrayBuffer> {
  return new Promise((resolve) => {
    let reader = new FileReader()

    reader.onloadend = (event) => {
      resolve(event.target.result)
    }

    reader.readAsText(file)
  })
}
*/

// -- Types ----------------------------------------------------------------------------------------
