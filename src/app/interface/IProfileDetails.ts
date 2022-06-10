export interface IEducation {
  id: number,
  title: string,
  institution: string,
  startDate: string,
  endDate: string,
  description: string,
}

export interface IExperience {
  id: number,
  rol: string,
  startDate: string,
  endDate: string,
  description: string,
  companyName: string,
  urlCompany: string,
}

export interface IProfile {
  id: number,
  name: string,
  lastName: string,
  occupation: string,
  urlImgBanner: string,
  urlImgProfile: string,
  about: string,
}

export interface IProject {
  id: number,
  title: string,
  description: string,
  techs: string,
  urlDemo: string,
  urlImg: string,
  urlGit: string,
}

export interface ISkill {
  id: number,
  name: string,
  percentage: number,
  category: string,
}