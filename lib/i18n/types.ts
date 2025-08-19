export interface Translation {
  common: {
    search: string
    run: string
    copy: string
    copied: string
    syntax: string
    example: string
    result: string
    output: string
    noMethodsFound: string
    tryDifferentSearch: string
    runCodeToSeeOutput: string
    error: string
  }
  header: {
    title: string
    subtitle: string
  }
  footer: {
    createdWith: string
    creatorLink: string
    creatorLinkText: string
  }
  playground: {
    title: string
    interactivePlayground: string
  }
  categories: {
    searchAndTest: {
      name: string
      description: string
    }
    transform: {
      name: string
      description: string
    }
    extract: {
      name: string
      description: string
    }
    modify: {
      name: string
      description: string
    }
  }
  methods: {
    [key: string]: {
      description: string
    }
  }
}

export type Language = "en"
export type LanguageConfig = {
  code: Language
  name: string
  flag: string
}
