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
	| 'back'
	| 'overall_risk'
	| 'risk_description'
	| 'class_name'
	| 'no_students_with_tasks'
	| 'create_new_student'
	| 'red_explanation'
	| 'yellow_explanation'
	| 'green_explanation'
	| 'support_material'
	| 'basic_support'
	| 'supplementary_material'
	| 'legend'
	| 'remove'
	| 'sure_remove_student'
	| 'yes'
	| 'no'
	| 'remove_class'
	| 'sure_remove_class'
	| 'icon_title'
	| 'select_tasks'
	| 'no_selected_tasks'
	| 'edit_tasks'
	| 'close'
	| 'save'
	| 'print_users'
	| 'print_overview';

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
		de: 'Anzahlen',
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
	class_name: {
		en: 'Classname',
		sv: 'Klassens namn',
		de: 'Klasse',
		el_cy: 'όνομα της τάξης'
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
		de: 'Passwort bestätigen',
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
		el_cy: 'Ψευδώνυμο'
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
	},
	overall_risk: {
		en: 'Risk',
		sv: 'Risk',
		de: 'Risiko',
		el_cy: 'κίνδυνος'
	},
	risk_description: {
		en: 'Risk for developing mathematical difficulties',
		sv: 'Risken för att utveckla matematiska svårigheter',
		de: 'Risko für die Entwicklung besonderer Schwierigkeiter beim Mathematiklernen',
		el_cy: 'Κίνδυνος για ανάπτυξη μαθηματικών δυσκολιών'
	},
	no_students_with_tasks: {
		en: 'No students have completed tasks',
		sv: 'Inga elever har slutfört uppgifter',
		de: 'Keine Schüler*innen haben diese Aufgabe bearbeitet',
		el_cy: 'Κανένας μαθητής δεν έχει ολοκληρώσει εργασίες'
	},
	create_new_student: {
		en: 'Create new student',
		sv: 'Skapa ny elev',
		de: 'Neue Schüler*innen hinzufügen',
		el_cy: 'Δημιουργία νέου μαθητή'
	},
	red_explanation: {
		en: 'The child has shown greater difficulty in this area. It is important for this child to be fostered in this area in order to acquire these mathematical skills.',
		sv: 'Barnet har haft stora svårigheter på detta område. Det är viktigt för detta barn att fostras inom detta område för att skaffa sig dessa matematiska färdigheter.',
		de: 'Das Kind hat in diesem Bereich größere Schwierigkeiten gezeigt. Für dieses Kind ist es wichtig, in diesem Bereich gefördert zu werden, um diese mathematischen Fähigkeiten erwerben zu können.',
		el_cy:
			'Το παιδί έχει δείξει μεγαλύτερη δυσκολία σε αυτόν τον τομέα. Είναι σημαντικό αυτό το παιδί να ανατραφεί σε αυτόν τον τομέα για να αποκτήσει αυτές τις μαθηματικές δεξιότητες.'
	},
	yellow_explanation: {
		en: "The child has shown partial difficulty in this area. It would be useful to review the child's mathematical skills in this area and foster them if necessary.",
		sv: 'Barnet har delvis haft svårt på detta område. Det skulle vara användbart att se över barnets matematiska färdigheter inom detta område och främja dem vid behov.',
		de: 'Das Kind hat in diesem Bereich teilweise Schwierigkeiten gezeigt. Es wäre sinnvoll, die mathematischen Fähigkeiten des Kindes in diesem Bereich zu überprüfen und gegebenenfalls zu fördern.',
		el_cy:
			'Το παιδί έχει δείξει μερική δυσκολία σε αυτόν τον τομέα. Θα ήταν χρήσιμο να επανεξετάσουμε τις μαθηματικές δεξιότητες του παιδιού σε αυτόν τον τομέα και να τις καλλιεργήσουμε αν χρειαστεί.'
	},
	green_explanation: {
		en: 'The child has not shown any difficulties in this area.',
		sv: 'Barnet har inte visat några svårigheter på detta område.',
		de: 'Das Kind hat in diesem Bereich keine Schwierigkeiten gezeigt.',
		el_cy: 'Το παιδί δεν έχει παρουσιάσει δυσκολίες σε αυτόν τον τομέα.'
	},
	support_material: {
		en: 'Support material',
		sv: 'Stödmaterial',
		de: 'Fördermaterial',
		el_cy: 'Υλικό υποστήριξης'
	},
	basic_support: {
		en: 'Basic support',
		sv: 'Grundläggande stöd',
		de: 'Basisförderung',
		el_cy: 'Βασική υποστήριξη'
	},
	supplementary_material: {
		en: 'Supplementary material',
		sv: 'Kompletterande stöd',
		de: 'Zusatzmaterial',
		el_cy: 'Συμπληρωματική υποστήριξη'
	},
	legend: {
		en: 'Legend',
		sv: 'Färgförklaring',
		de: 'Legende',
		el_cy: 'Εξήγηση'
	},
	remove: {
		en: 'Remove student',
		sv: 'Ta bort elev',
		de: 'Schüler entfernen',
		el_cy: 'Αφαίρεση μαθητή'
	},
	sure_remove_student: {
		en: 'Are you sure you want to remove the student? All data for the student will be removed.',
		sv: 'Är du säker på att du vill ta bort eleven? All data för eleven kommer att tas bort.',
		de: 'Möchten Sie den Schüler wirklich entfernen? Alle Daten des Studierenden werden gelöscht.',
		el_cy:
			'Είστε βέβαιοι ότι θέλετε να αφαιρέσετε τον μαθητή; Όλα τα δεδομένα για τον μαθητή θα αφαιρεθούν.'
	},
	yes: {
		en: 'Yes',
		sv: 'Ja',
		de: 'Ja',
		el_cy: 'Ναί'
	},
	no: {
		en: 'No',
		sv: 'Nej',
		de: 'Nein',
		el_cy: 'Οχι'
	},
	remove_class: {
		en: 'Remove class',
		sv: 'Ta bort klass',
		de: 'Klasse entfernen',
		el_cy: 'Κατάργηση τάξης'
	},
	sure_remove_class: {
		en: 'Are you sure you want to remove this class? All students and their completed tasks will be REMOVED!',
		sv: 'Är du säker på att du vill ta bort den här klassen? Alla elever och deras utförda uppgifter kommer att TAS BORT!',
		de: 'Möchten Sie diese Klasse wirklich entfernen? Alle Schüler und ihre erledigten Aufgaben werden ENTFERNT!',
		el_cy:
			'Είστε βέβαιοι ότι θέλετε να καταργήσετε αυτήν την τάξη; Όλοι οι μαθητές και οι ολοκληρωμένες εργασίες τους θα ΑΦΑΙΡΟΥΝΤΑΙ!'
	},
	icon_title: {
		en: 'Kids’ view on the tasks',
		sv: 'Elevernas uppgiftsvy',
		de: 'Kinderansicht der Aufgaben',
		el_cy: 'Η άποψη των παιδιών για τις εργασίες'
	},
	select_tasks: {
		en: 'Select tasks',
		sv: 'Välj uppgifter',
		de: 'Wählen Sie Aufgaben aus',
		el_cy: 'Επιλέξτε εργασίες'
	},
	no_selected_tasks: {
		en: 'The user has no selected tasks',
		sv: 'Användaren har inga valda uppgifter',
		de: 'Der Benutzer hat keine ausgewählten Aufgaben',
		el_cy: 'Ο χρήστης δεν έχει επιλεγμένες εργασίες'
	},
	edit_tasks: {
		en: 'Edit tasks',
		sv: 'Ändra uppgifter',
		de: 'Aufgaben bearbeiten',
		el_cy: 'Επεξεργασία εργασιών'
	},
	close: {
		en: 'Close',
		sv: 'Stäng',
		de: 'Schließen',
		el_cy: 'Κλείσε'
	},
	save: {
		en: 'Save',
		sv: 'Spara',
		de: 'Speichern',
		el_cy: 'Αποθηκεύσετε'
	},
	print_users: {
		en: 'Print student list',
		sv: 'Skriv ut studentlista',
		de: 'Studentenliste drucken',
		el_cy: 'Εκτύπωση λίστας μαθητών'
	},
	print_overview: {
		en: 'Print student overview',
		sv: 'Skriv ut elevöversikt',
		de: 'Schüler*innenübersicht drucken',
		el_cy: 'Εκτύπωση επισκόπησης μαθητή'
	}
};

export type I18NPrintKey = 'student_list_header';

export const i18nPrint: {
	[key in I18NPrintKey]: {
		en: string;
		sv: string;
		de: string;
		el_cy: string;
	};
} = {
	student_list_header: {
		en: 'Students',
		sv: 'Elever',
		de: 'Schüler*innen',
		el_cy: 'Φοιτητές'
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
