export const apiEndpoints = {
  homeEndpoint: `api/startseite?populate[Benefits][populate]=Icon&populate[Metadaten]=true&populate[Leistungen_Inhalt]=true&populate[Bildre_Text][populate][Button]=true&populate[Bildre_Text][populate][Bild]=true&populate[Bildre_Text][populate][Video]=true&populate[Bildre_Text][populate][Videominiatur]=true&populate[References][populate][referenzens][populate][Bild][populate]=*&populate[References][populate][referenzens][populate][Video][populate]=*&populate[References][populate][referenzens][populate][Videominiatur][populate]=*&populate[References][populate][Button]=true&populate[Arbeiten][populate]=*&populate[News][populate][news][populate]=*&populate[Kontaktbereich]=true`,
  leistungensEndpoint: `api/leistungens?populate=tag`,
  getDocumentsIdEndpoint: `api/leistungens?fields[0]=documentId&fields[1]=Slug`,
  getleistungenInnerBySlugEndpoint: (documentid) => `api/leistungens/${documentid}?populate[tag][populate]=Icon&populate[Button]=true&populate[Bildre_Text][populate][Button]=true&populate[Bildre_Text][populate][Bild]=true&populate[Kontaktbereich]=true&populate[Metadaten]=true
    `,
  getLeistungenPageEndpoint: `api/leistungen-seite?populate[Funktioniert][populate][Funktionsweise][populate]=*&populate[Metadaten]=true`,

  getInsightPageHeadingEndpoint: `api/insights-seite?populate=*`,
  getInsightPageCategoryEndpoint: `api/referenzens?populate=*`,

  getReferenzenDocumentsIdEndpoint: `api/referenzens?fields[0]=documentId&fields[1]=Slug`,
  getReferenzenInnerBySlugEndpoint: (documentId) =>
    `api/referenzens/${documentId}?populate[0]=Inhaltsabschnitt.Bild&populate[1]=Inhaltsabschnitt.Logo&populate[2]=Inhaltsabschnitt.Inhalt.Icon&populate[3]=Bildbereich.Bild&populate[4]=Projekte&populate[5]=Metadaten`,
  teamSeiteEndpoint: `api/team-seite?populate=*`,
  teamsEndpoint: `api/teams?populate=*`,

  getNewsHeaderEndpoint:`api/news-seite?populate=*`,
  getNewsCardsCategoryEndpoint:`api/newss?populate=*`,


}
