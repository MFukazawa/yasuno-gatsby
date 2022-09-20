/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import { wrapPageElement as wrap } from "./src/rootWrapper"

export const wrapPageElement = wrap
