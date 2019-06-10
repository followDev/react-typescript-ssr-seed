/***
 * This is the first iteration of omega packager.
 * ------------------
 * Todo:            |
 * ------------------
 * - Give the possiblity of packaging a container based on given model file.
 *  - omega package webChatContainer --container
 *  - omega package webChatComponent --component
 * - Give the possiblity to unpackage a container based on given json file.
 * 
 * Tasks:
 * - Read web container json and scafold a container
 * - Read web component json and scafold a component
 * - Read libraries from each json and do npm install with their specified version
 * - Symlink internal components so they can be imported and packaged externally.
 */