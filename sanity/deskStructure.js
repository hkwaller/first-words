import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Astrid')
    .items([
      S.listItem().title('Words').items([
      S.listItem()
        .title('Words')
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('Posts By Category')
                .child(),
              S.listItem()
                .title('Posts By Author')
                .child()
            ])
        ])
    
