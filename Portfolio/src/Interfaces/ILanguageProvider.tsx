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
    education: string,
    contact: string,
    about_me: string,
    interest_and_activity: string,
    nationality: string,
    octuber_2020: string,
    january_2022: string,
    web_app_to_do_list: string,
    create_basic_api: string,
    create_self_presentation: string,
    write_spring_boot_send_data: string,
    create_model_to_classify_images_locations: string,
    create_game_color_code_game: string,
    chiangmai_university: string,
    bechelor_engineer: string,
    thai: string,
    name: string,
    age: string,
    create_web_app_gallic_walk: string,
    create_model_to_classify_four_food: string,
    phone_me: string
}

export interface IProviderData{
    Language: string,
    dictionary: ILanguageForm,
    userLanguageChange: (select:string) => void
}

export interface IDictionaryList{
    en: ILanguageForm,
    th: ILanguageForm
}