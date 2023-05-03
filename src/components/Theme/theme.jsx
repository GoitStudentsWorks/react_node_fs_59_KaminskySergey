export const theme = {
  /* 
    Звертатись до змінних у файлі .styled.jsx через ${props => props.theme.mainBackgroundColor};  
  */
  // ======================================================================================================

  // Стилі для світлої теми
  light: {
    // animation
    defaultTransition: 'all 250ms',
    // buttons
    borderAddTask: '2px dashed #3e85f3',
    buttonAddTaskColor: '#171820',
    buttonAddTaskColorHover: '#FFFFFF',
    buttontextColor: '#FFFFFF',
    buttonBackgroundColorAddTask: '#E3F3FF',
    buttonBackgroundColorAddTaskHover: '#3E85F3',
    buttonBackgroundColor: '#3E85F3',
    buttonBackgroundColorHover: '#2B78EF',
    buttonShadow: ' 4px 2px 16px rgba(136, 165, 191, 0.48)',
    // comon colors
    mainBackgroundColor: '#FFFFFF',
    secondaryBackgroundColor: '#F7F6F9',
    accentColor: '#3E85F3',
    mainTextColor: '#111111',

    secondaryTextColor: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, 0.15)',

    // AsideBar
    asideBarBackground: '#FFFFFF',
    asideBarLogoText: '#3E85F3',
    asideBarTitle: '#7E7D82',
    asideBarIcon: '#84828A',
    asideBarIconActive: '#3E85F3',
    asideBarLinkText: '#84828A',
    asideBarActiveLinkText: '#3E85F3',
    asideBarActiveLinkBackground: '#E3F3FF',
    asideBarLinkBackgroundHover: 'rgba(120, 165, 191, 0.1)',
    assideBarCloseIconColor: '#343434',

    // Header
    headerBurgerIcon: '#343434',

    // UserProfile

    inputText: '#111111',
    labelText: '#111111',
    inputBorder: 'rgba(17, 17, 17, 0.15)',

    TextColorUserProfile: '#111111',

    //CalendarHead
    CalendarHead: '#616161',
    CurrentDate: '#FFFFFF',

    // TaskModal
    taskModalInputColor: '#F6F6F6',
    taskModalLabelColor: '#5D5D5D',
  },

  // Стилі для темної теми
  dark: {
    defaultTransition: 'all 250ms',
    // buttons
    borderAddTask: 'none',
    buttonAddTaskColor: '#FFFFFF',
    buttonAddTaskColorHover: '#111111',
    buttonBackgroundColorAddTask: '#3E85F3',
    buttonBackgroundColorAddTaskHover: '#E3F3FF',
    buttontextColor: '#FFFFFF',
    buttonBackgroundColor: '#3E85F3',
    buttonBackgroundColorHover: '#2B78EF',
    buttonShadow: '4px 2px 16px rgba(136, 165, 191, 0.3);',
    // comon colors
    mainBackgroundColor: '#21222C',
    secondaryBackgroundColor: '#171820',
    accentColor: '#3E85F3',
    mainTextColor: '#FFFFFF',

    secondaryTextColor: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, 0.15)',

    // AsideBar
    asideBarBackground: '#13151A',
    asideBarLogoText: '#FFFFFF',
    asideBarTitle: '#585A5D',
    asideBarIcon: '#FFFFFF',
    asideBarIconActive: '#FFFFFF',
    asideBarLinkText: '#FFFFFF',
    asideBarActiveLinkText: '#FFFFFF',
    asideBarActiveLinkBackground: '#3E85F3',
    asideBarLinkBackgroundHover: 'rgba(120, 165, 191, 0.1)',
    assideBarCloseIconColor: '#FFFFFF',

    // Header
    headerBurgerIcon: '#FFFFFF',

    // UserProfile

    inputText: '#ffffff',
    labelText: 'rgba(250, 250, 250, 0.3);',
    inputBorder: 'rgba(255, 255, 255, 0.15)',

    TextColorUserProfile: '#111111',
    //CalendarHead
    CalendarHead: '#FFFFFF',
    CurrentDate: '#FFFFFF',
  },

  // TaskModal
  taskModalInputColor: '#171820',
  taskModalLabelColor: '#5B5C61',
};
