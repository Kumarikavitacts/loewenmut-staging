export const apiEndpoints ={
    homeEndpoint: `api/startseite?populate[Modul][on][modules.benefits][populate][Benefits_Data][populate][Icon][populate]=*&populate[Modul][on][modules.kurztitel-titel-text-button][populate][PDF][populate]=*&populate[Modul][on][modules.bild-re-text][populate][Bild][populate]=*&populate[Modul][on][modules.bild-re-text][populate][Video][populate]=*&populate[Modul][on][modules.bild-re-text][populate][Videominiatur][populate]=*&populate[Modul][on][modules.bild-re-text][populate][Button][populate]=*&populate[Modul][on][modules.bild-re-text][populate][PDF][populate]=*&populate[Modul][on][modules.arbeiten][populate]=*&populate[Modul][on][modules.references][populate][referenzens][populate]=*&populate[Modul][on][modules.references][populate][Button][populate]=*&populate[Modul][on][modules.news][populate][news][populate]=*&populate[Kontaktbereich]=*&populate[Metadaten]=true`,
    leistungensEndpoint: `api/leistungens?populate=tag`,
    getDocumentsIdEndpoint: `api/leistungens?fields[0]=documentId&fields[1]=Slug`,
    getleistungenInnerBySlugEndpoint:(documentid)=>`api/leistungens/${documentid}?populate[tag][populate]=Icon&populate[Button]=true&populate[Bildre_Text][populate][Button]=true&populate[Bildre_Text][populate][Bild]=true&populate[Kontaktbereich]=true`,
    getLeistungenPageEndpoint :`api/leistungen-seite?populate[Funktioniert][populate][Funktionsweise][populate]=*`,

    getInsightPageHeadingEndpoint:`api/insights-seite?populate=*`,
    getInsightPageCategoryEndpoint:`api/referenzens?populate=*`,
}

