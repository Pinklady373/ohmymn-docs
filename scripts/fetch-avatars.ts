import fs from "fs-extra"
import { $fetch } from "ohmyfetch"
import { coreTeamMembers } from "../src/contributors"

const pathContributors = "./contributors.json"
const dirAvatars = "./public/user-avatars/"

let contributors: string[] = []
const team = coreTeamMembers.map(i => i.github)

async function download(url: string, fileName: string) {
  const image = await $fetch(url, { responseType: "arrayBuffer" })
  await fs.writeFile(fileName, Buffer.from(image))
}

async function fetchAvatars() {
  await fs.ensureDir(dirAvatars)
  contributors = JSON.parse(
    await fs.readFile(pathContributors, { encoding: "utf-8" })
  )

  await Promise.all(
    contributors.map(async name =>
      download(
        `https://github.com/${name}.png?size${team.includes(name) ? 100 : 40}`,
        `${dirAvatars}${name}.png`
      )
    )
  )
}

fetchAvatars()
