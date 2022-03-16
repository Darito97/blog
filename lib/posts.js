import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostData = fileNames.map(fileName => {
    const nameOfFile = fileName.replace(/\.md/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    const matterResult = matter(fileContents)
    return {
      nameOfFile,
      ...matterResult
    }
  })
}
export function getAllPostNames() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        name: fileName.replace(/\.md/, '')
      }
    }
  })
}
export async function getPostData(name) {
  const fullPath = path.join(postsDirectory, `${name}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  const matterResult = matter(fileContents)

  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHTML = processedContent.toString()
  return {
    name,
    contentHTML,
    ...matterResult.data
  }
}