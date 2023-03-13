export type I18NKey =
	| 'login_teacher'
	| 'login_student'
	| 'create_user'
	| 'what_is'
	| 'profile'
	| 'create_class'
	| 'select_class'
	| 'overview'
	| 'logout'
	| 'quantities'
	| 'numberPattern'
	| 'numberLine'
	| 'completionToTen'
	| 'colorPattern'
	| 'hiddenNumber'
	| 'numberComparison'
	| 'quantityComparison'
	| 'plus'
	| 'minus'
	| 'task_overview'
	| 'student_overview'
	| 'language_info'
	| 'added_students'
	| 'no_students'
	| 'students'
	| 'add_student'
	| 'email'
	| 'password'
	| 'login'
	| 'confirm_password'
	| 'register'
	| 'nickname'
	| 'firstname'
	| 'student_username'
	| 'user_login'
	| 'classes'
	| 'back';

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
		de: 'Anmelden als Lehrkraft',
		el_cy: 'Συνδεθείτε δάσκαλος'
	},
	student_username: {
		en: 'Username',
		sv: 'Användarnamn',
		de: 'Anmeldecode',
		el_cy: 'Όνομα χρήστη'
	},
	login_student: {
		en: 'Log in as a student',
		sv: 'Logga in som elev',
		de: 'Anmelden als Schüler*in (Anmeldecode)',
		el_cy: 'Είσοδος μαθητή'
	},
	what_is: {
		en: 'What is DIDUNAS?',
		sv: 'Vad är DIDUNAS?',
		de: 'Was ist DIDUNAS?',
		el_cy: 'Τι είναι το DIDUNAS?'
	},
	create_user: {
		en: 'Create new user',
		sv: 'Skapa ny användare',
		de: 'Registrieren als Lehrkraft',
		el_cy: 'Δημιουργία νέου χρήστη'
	},
	quantities: {
		en: 'Quantities',
		sv: 'Mängder',
		de: 'Mengen',
		el_cy: 'Ποσότητες'
	},
	numberPattern: {
		en: 'Number pattern',
		sv: 'Siffer mönster',
		de: 'Zahlenmuster',
		el_cy: 'Μοτίβα με αριθμούς'
	},
	numberLine: {
		en: 'Number line',
		sv: 'Tallinje',
		de: 'Zahlenstrahl',
		el_cy: 'Αριθμητική γραμμή'
	},
	completionToTen: {
		en: 'Completion to 10',
		sv: 'Upp till 10',
		de: 'Ergänzen zur 10',
		el_cy: 'Συμπλήρωση μέχρι το 10'
	},
	colorPattern: {
		en: 'Color pattern',
		sv: 'Färgmönster',
		de: 'Farbmuster',
		el_cy: 'Μοτίβα με χρώματα'
	},
	hiddenNumber: {
		en: 'Hidden number',
		sv: 'Föregående och nästa nummer',
		de: 'Vorgänger und Nachfolger',
		el_cy: 'Προηγούμενος και επόμενος αριθμός'
	},
	numberComparison: {
		en: 'Number comparison',
		sv: 'Sifferjämförelse',
		de: 'Zahlvergleich',
		el_cy: 'Σύγκριση αριθμών'
	},
	quantityComparison: {
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
		de: 'Klasse erstellen',
		el_cy: 'Δημιουργήστε μια τάξη'
	},
	select_class: {
		en: 'Select a class',
		sv: 'Välj en klass',
		de: 'Klasse wechseln',
		el_cy: 'Επιλέξτε μια τάξη'
	},
	task_overview: {
		en: 'Task overview',
		sv: 'Uppgiftsöversikt',
		de: 'Aufgabenübersicht',
		el_cy: 'Επισκόπηση εργασιών'
	},
	student_overview: {
		en: 'Student overview',
		sv: 'Elevöversikt',
		de: 'Schüler*innenübersicht',
		el_cy: 'Επισκόπηση μαθητή'
	},
	language_info: {
		en: 'This is the language in which the tasks are given to the students',
		sv: 'Detta är språket som eleverna får sina uppgifter i',
		de: 'Dies ist die Sprache, in der die Aufgaben an die Schüler*innen gestellt werden.',
		el_cy: 'Αυτή είναι η γλώσσα στην οποία δίνονται οι εργασίες στους μαθητές'
	},
	added_students: {
		en: 'Added students',
		sv: 'Tillagda elever',
		de: 'Schüler*innen',
		el_cy: 'Προστέθηκαν μαθητές'
	},
	no_students: {
		en: 'No students added',
		sv: 'Inga elever har blivit tillagda',
		de: 'Keine Schüler*innen hinzugefügt',
		el_cy: 'Προστέθηκαν μαθητές'
	},
	students: {
		en: 'Students',
		sv: 'Elever',
		de: 'Schüler*innen',
		el_cy: 'Φοιτητές'
	},
	add_student: {
		en: 'Add student',
		sv: 'Lägg till elev',
		de: 'Schüler*in hinzufügen',
		el_cy: 'Προσθήκη μαθητή'
	},
	email: {
		en: 'E-mail',
		sv: 'E-mail',
		de: 'E-Mail-Adresse',
		el_cy: 'ΗΛΕΚΤΡΟΝΙΚΗ ΔΙΕΥΘΥΝΣΗ'
	},
	password: {
		en: 'Password',
		sv: 'Lösenord',
		de: 'Passwort',
		el_cy: 'Κωδικός πρόσβασης'
	},
	login: {
		en: 'Login',
		sv: 'Logga in',
		de: 'Anmelden',
		el_cy: 'Σύνδεση'
	},
	user_login: {
		en: 'Login',
		sv: 'Logga in',
		de: 'Weiter',
		el_cy: 'Σύνδεση'
	},
	confirm_password: {
		en: 'Confirm password',
		sv: 'Bekräfta lösenord',
		de: 'Passwort besträtigen',
		el_cy: 'Επιβεβαίωση Κωδικού'
	},
	register: {
		en: 'Register',
		sv: 'Registrera',
		de: 'Registrieren',
		el_cy: 'Κανω ΕΓΓΡΑΦΗ'
	},
	nickname: {
		en: 'Nickname',
		sv: 'Smeknamn',
		de: 'Spitzname',
		el_cy: 'Παρατσούκλι'
	},
	firstname: {
		en: 'Firstname',
		sv: 'Förnamn',
		de: 'Vorname',
		el_cy: 'Ονομα'
	},
	classes: {
		en: 'Classes',
		sv: 'Klasser',
		de: 'Klassen',
		el_cy: 'Τάξεις'
	},
	back: {
		en: 'Back',
		sv: 'Tillbaka',
		de: 'Zurück',
		el_cy: 'Πίσω'
	}
};

export type Languages = 'en' | 'de' | 'sv' | 'el_cy';
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
