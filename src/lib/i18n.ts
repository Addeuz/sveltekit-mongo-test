export type I18NKey =
	| 'login_teacher'
	| 'login_student'
	| 'create_user'
	| 'profile'
	| 'create_class'
	| 'overview'
	| 'logout'
	| 'quantities'
	| 'number_pattern'
	| 'number_line'
	| 'completion_to_ten'
	| 'color_pattern'
	| 'hidden_number'
	| 'number_comparison'
	| 'quantity_comparison'
	| 'plus'
	| 'minus';

export const i18n: {
	[key in I18NKey]: {
		en: string;
		sv: string;
		de: string;
		el_cy: string;
	};
} = {
	login_teacher: {
		en: 'Log in as a teacher',
		sv: 'Logga in som lärare',
		de: 'Melden Sie sich als Lehrer an',
		el_cy: 'Συνδεθείτε δάσκαλος'
	},
	login_student: {
		en: 'Log in as a student',
		sv: 'Logga in som lärare',
		de: 'Melden Sie sich als Student an',
		el_cy: 'Είσοδος μαθητή'
	},
	create_user: {
		en: 'Create new user',
		sv: 'Skapa ny användare',
		de: 'Neuen Benutzer anlegen',
		el_cy: 'Δημιουργία νέου χρήστη'
	},
	quantities: {
		en: 'Quantities',
		sv: 'Mängder',
		de: 'Mengen',
		el_cy: 'Ποσότητες'
	},
	number_pattern: {
		en: 'Number pattern',
		sv: 'Siffer mönster',
		de: 'Zahlenmuster',
		el_cy: 'Μοτίβα με αριθμούς'
	},
	number_line: {
		en: 'Number line',
		sv: 'Tallinje',
		de: 'Zahlenstrahl',
		el_cy: 'Αριθμητική γραμμή'
	},
	completion_to_ten: {
		en: 'Completion to 10',
		sv: 'Upp till 10',
		de: 'Ergänzen zur 10',
		el_cy: 'Συμπλήρωση μέχρι το 10'
	},
	color_pattern: {
		en: 'Quantities',
		sv: 'Färgmönster',
		de: 'Farbmuster',
		el_cy: 'Μοτίβα με χρώματα'
	},
	hidden_number: {
		en: 'Quantities',
		sv: 'Föregående och nästa nummer',
		de: 'Vorgänger und Nachfolger',
		el_cy: 'Προηγούμενος και επόμενος αριθμός'
	},
	number_comparison: {
		en: 'Number comparison',
		sv: 'Sifferjämförelse',
		de: 'Zahlvergleich',
		el_cy: 'Σύγκριση αριθμών'
	},
	quantity_comparison: {
		en: 'Quantity comparison',
		sv: 'Mängd jämförelse',
		de: 'Mengenvergleich',
		el_cy: 'Σύγκριση ποσοτήτων'
	},
	plus: {
		en: 'Plus',
		sv: 'Plus',
		de: 'Plus-Aufgaben',
		el_cy: 'Πρόσθεση'
	},
	minus: {
		en: 'Minus',
		sv: 'Minus',
		de: 'Minus-Aufgaben',
		el_cy: 'Αφαίρεση'
	},
	profile: {
		en: 'Profile',
		sv: 'Profil',
		de: 'Profil',
		el_cy: 'Προφίλ'
	},
	overview: {
		en: 'Overview',
		sv: 'Översikt',
		de: 'Überblick',
		el_cy: 'Στατιστική'
	},
	logout: {
		en: 'Log out',
		sv: 'Logga ut',
		de: 'Ausloggen',
		el_cy: 'Αποσύνδεση'
	},
	create_class: {
		en: 'Create a class',
		sv: 'Skapa en klass',
		de: 'Erstellen Sie eine Klasse',
		el_cy: 'Δημιουργήστε μια τάξη'
	}
};

export const languages = [
	{
		language: 'en',
		text: 'English',
		icon: '🇬🇧'
	},
	{
		language: 'de',
		text: 'Deutsch',
		icon: '🇩🇪'
	},
	{
		language: 'sv',
		text: 'Svenska',
		icon: '🇸🇪'
	},
	{
		language: 'el_cy',
		text: 'Ελληνικά',
		icon: '🇬🇷'
	}
];
