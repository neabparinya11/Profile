export interface ILanguageProvider{
    userLanguage: string,
    dictionary: ILanguageForm
}

export interface ILanguageForm{
    parinya: string,
    muangrod: string,
    address: string,
    my_email1: string,
    my_email2: string,
    video_game: string,
    drawing: string,
    computer_engineering: string,
    reading_book: string,
    experience: string,
    make_a_small_game_with_c: string,
    march_2020: string,
    skill: string,
    education: string
}

export interface IProviderData{
    userLanguage: string,
    dictionary: ILanguageForm,
    userLanguageChange: (selected: string) => void
}

export interface IDictionaryList{
    en: ILanguageForm,
    th: ILanguageForm
}