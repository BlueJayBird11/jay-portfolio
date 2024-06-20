export interface Project {
  id: string,
  name: string,
  type: string,
  photosPath: string,
  summary: string,
  skills: string,
  fullSummary: string[],
  links: string[][],
  startDate: string,
  endDate: string,
  yt?: HTMLIFrameElement
}
