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
	| 'print_overview'
	| 'reset_password'
	| 'create_class_first'
	| 'show_class'
	| 'student_answers'
	| 'answer'
	| 'right_answer'
	| 'time_to_answer'
	| 'equal'
	| 'yellow'
	| 'blue'
	| 'red'
	| 'skip';

export const i18n: {
	[key in I18NKey]: {
		en: string;
		sv: string;
		de: string;
		el_cy: string;
		tr: string;
	};
} = {
	login_teacher: {
		en: 'Log in as a teacher',
		sv: 'Logga in som lärare',
		de: 'Anmelden als Lehrkraft',
		el_cy: 'Συνδεθείτε δάσκαλος',
		tr: 'Eğitim görevlisi olarak giriş yap'
	},
	student_username: {
		en: 'Username',
		sv: 'Användarnamn',
		de: 'Anmeldecode',
		el_cy: 'Όνομα χρήστη',
		tr: 'Kullanıcı adı'
	},
	login_student: {
		en: 'Log in as a student',
		sv: 'Logga in som elev',
		de: 'Anmelden als Schüler*in (Anmeldecode)',
		el_cy: 'Είσοδος μαθητή',
		tr: 'Öğrenci olarak giriş yap'
	},
	what_is: {
		en: 'What is DIDUNAS?',
		sv: 'Vad är DIDUNAS?',
		de: 'Was ist DIDUNAS?',
		el_cy: 'Τι είναι το DIDUNAS?',
		tr: 'DIDUNAS nedir?'
	},
	create_user: {
		en: 'Create new user',
		sv: 'Skapa ny användare',
		de: 'Registrieren als Lehrkraft',
		el_cy: 'Δημιουργία νέου χρήστη',
		tr: 'Eğitim görevlisi olarak üye ol'
	},
	quantities: {
		en: 'Quantities',
		sv: 'Mängder',
		de: 'Anzahlen',
		el_cy: 'Ποσότητες',
		tr: 'Adetler'
	},
	numberPattern: {
		en: 'Number pattern',
		sv: 'Talmönster',
		de: 'Zahlenmuster',
		el_cy: 'Μοτίβα με αριθμούς',
		tr: 'Sayı örüntüleri'
	},
	numberLine: {
		en: 'Number line',
		sv: 'Tallinje',
		de: 'Zahlenstrahl',
		el_cy: 'Αριθμητική γραμμή',
		tr: 'Sayı doğrusu'
	},
	completionToTen: {
		en: 'Completion to 10',
		sv: 'Upp till 10',
		de: 'Ergänzen zur 10',
		el_cy: 'Συμπλήρωση μέχρι το 10',
		tr: '10’a tamamlama'
	},
	colorPattern: {
		en: 'Color pattern',
		sv: 'Färgmönster',
		de: 'Farbmuster',
		el_cy: 'Μοτίβα με χρώματα',
		tr: 'Renk örüntüleri'
	},
	hiddenNumber: {
		en: 'Hidden number',
		sv: 'Föregående och nästa tal',
		de: 'Vorgänger und Nachfolger',
		el_cy: 'Προηγούμενος και επόμενος αριθμός',
		tr: 'Önceki sonraki sayıyı bulma'
	},
	numberComparison: {
		en: 'Number comparison',
		sv: 'Jämföra tal',
		de: 'Zahlvergleich',
		el_cy: 'Σύγκριση αριθμών',
		tr: 'Sayı karşılaştırma'
	},
	quantityComparison: {
		en: 'Quantity comparison',
		sv: 'Jämföra mängder',
		de: 'Mengenvergleich',
		el_cy: 'Σύγκριση ποσοτήτων',
		tr: 'Varlık grupları karşılaştırması'
	},
	plus: {
		en: 'Plus',
		sv: 'Plus',
		de: 'Plus-Aufgaben',
		el_cy: 'Πρόσθεση',
		tr: 'Toplama işlemi'
	},
	minus: {
		en: 'Minus',
		sv: 'Minus',
		de: 'Minus-Aufgaben',
		el_cy: 'Αφαίρεση',
		tr: 'Çıkarma işlemi'
	},
	profile: {
		en: 'Profile',
		sv: 'Profil',
		de: 'Profil',
		el_cy: 'Προφίλ',
		tr: ''
	},
	overview: {
		en: 'Overview',
		sv: 'Översikt',
		de: 'Überblick',
		el_cy: 'Στατιστική',
		tr: ''
	},
	logout: {
		en: 'Log out',
		sv: 'Logga ut',
		de: 'Ausloggen',
		el_cy: 'Αποσύνδεση',
		tr: 'Çıkış yap'
	},
	create_class: {
		en: 'Create a class',
		sv: 'Skapa en klass',
		de: 'Klasse erstellen',
		el_cy: 'Δημιουργήστε μια τάξη',
		tr: 'Sınıf aç'
	},
	class_name: {
		en: 'Classname',
		sv: 'Klassens namn',
		de: 'Klasse',
		el_cy: 'όνομα της τάξης',
		tr: 'Sınıf adı'
	},
	select_class: {
		en: 'Select a class',
		sv: 'Välj en klass',
		de: 'Klasse wechseln',
		el_cy: 'Επιλέξτε μια τάξη',
		tr: 'Sınıfı değiştir'
	},
	task_overview: {
		en: 'Task overview',
		sv: 'Uppgiftsöversikt',
		de: 'Aufgabenübersicht',
		el_cy: 'Επισκόπηση εργασιών',
		tr: 'Ödev tablosu'
	},
	student_overview: {
		en: 'Student overview',
		sv: 'Elevöversikt',
		de: 'Schüler*innenübersicht',
		el_cy: 'Επισκόπηση μαθητή',
		tr: 'Öğrencilerin isim tablosu'
	},
	language_info: {
		en: 'This is the language in which the tasks are given to the students',
		sv: 'Detta är språket som eleverna får sina uppgifter i',
		de: 'Dies ist die Sprache, in der die Aufgaben an die Schüler*innen gestellt werden.',
		el_cy: 'Αυτή είναι η γλώσσα στην οποία δίνονται οι εργασίες στους μαθητές',
		tr: 'Bu, öğrencilere görevlerin verildiği dildir'
	},
	added_students: {
		en: 'Added students',
		sv: 'Tillagda elever',
		de: 'Schüler*innen',
		el_cy: 'Προστέθηκαν μαθητές',
		tr: 'Öğrenciler eklendi'
	},
	no_students: {
		en: 'No students added',
		sv: 'Inga elever har lagts till',
		de: 'Keine Schüler*innen hinzugefügt',
		el_cy: 'Προστέθηκαν μαθητές',
		tr: 'Öğrenci henüz eklenmemiştir'
	},
	students: {
		en: 'Students',
		sv: 'Elever',
		de: 'Schüler*innen',
		el_cy: 'Φοιτητές',
		tr: 'Öğrenciler'
	},
	add_student: {
		en: 'Add student',
		sv: 'Lägg till elev',
		de: 'Schüler*in hinzufügen',
		el_cy: 'Προσθήκη μαθητή',
		tr: 'Yeni öğrenci ekle'
	},
	email: {
		en: 'E-mail',
		sv: 'E-mail',
		de: 'E-Mail-Adresse',
		el_cy: 'ΗΛΕΚΤΡΟΝΙΚΗ ΔΙΕΥΘΥΝΣΗ',
		tr: 'E-posta'
	},
	password: {
		en: 'Password',
		sv: 'Lösenord',
		de: 'Passwort',
		el_cy: 'Κωδικός πρόσβασης',
		tr: 'Şifre'
	},
	login: {
		en: 'Login',
		sv: 'Logga in',
		de: 'Anmelden',
		el_cy: 'Σύνδεση',
		tr: 'Giriş yapmak'
	},
	user_login: {
		en: 'Login',
		sv: 'Logga in',
		de: 'Anmelden',
		el_cy: 'Σύνδεση',
		tr: 'Giriş yapmak'
	},
	confirm_password: {
		en: 'Confirm password',
		sv: 'Bekräfta lösenord',
		de: 'Passwort bestätigen',
		el_cy: 'Επιβεβαίωση Κωδικού',
		tr: 'Şifreyi Onayla'
	},
	register: {
		en: 'Register',
		sv: 'Registrera',
		de: 'Registrieren',
		el_cy: 'Κανω ΕΓΓΡΑΦΗ',
		tr: 'Kullanıcıyı kaydet'
	},
	nickname: {
		en: 'Nickname',
		sv: 'Smeknamn',
		de: 'Spitzname',
		el_cy: 'Ψευδώνυμο',
		tr: 'Takma ad'
	},
	firstname: {
		en: 'Firstname',
		sv: 'Förnamn',
		de: 'Vorname',
		el_cy: 'Ονομα',
		tr: 'İlk adı'
	},
	classes: {
		en: 'Classes',
		sv: 'Klasser',
		de: 'Klassen',
		el_cy: 'Τάξεις',
		tr: 'Sınıflar'
	},
	back: {
		en: 'Back',
		sv: 'Tillbaka',
		de: 'Zurück',
		el_cy: 'Πίσω',
		tr: 'Geri'
	},
	overall_risk: {
		en: 'Risk',
		sv: 'Risk',
		de: 'Unterstütz-ungsbedarf',
		el_cy: 'κίνδυνος',
		tr: 'tehlikeye atmak'
	},
	risk_description: {
		en: 'Risk for developing mathematical difficulties',
		sv: 'Större behov av stöd när det gäller matematiska förkunskaper',
		de: 'größerer Unterstützungsbedarf in den mathematischen Vorläuferfähigkeiten',
		el_cy: 'Κίνδυνος για ανάπτυξη μαθηματικών δυσκολιών',
		tr: 'Matematik ön koşul becerileri konusunda daha büyük eksiklikler bulunuyor'
	},
	no_students_with_tasks: {
		en: 'No students have completed tasks',
		sv: 'Inga elever har slutfört uppgifter',
		de: 'Keine Schüler*innen haben diese Aufgabe bearbeitet',
		el_cy: 'Κανένας μαθητής δεν έχει ολοκληρώσει εργασίες',
		tr: 'Bu ödev öğrenci tarafından henüz islenmemiştir'
	},
	create_new_student: {
		en: 'Create new student',
		sv: 'Skapa ny elev',
		de: 'Neue Schüler*innen hinzufügen',
		el_cy: 'Δημιουργία νέου μαθητή',
		tr: 'Öğrenci ekle'
	},
	red_explanation: {
		en: 'The child has shown greater difficulty in this area. It is important for this child to be fostered in this area in order to acquire these mathematical skills.',
		sv: 'Eleven har haft stora svårigheter på detta område. Det är viktigt att eleven får stöd inom detta område så att den kan skaffa sig dessa matematiska färdigheter.',
		de: 'Das Kind hat in diesem Bereich größere Schwierigkeiten gezeigt. Für dieses Kind ist es wichtig, in diesem Bereich gefördert zu werden, um diese mathematischen Fähigkeiten erwerben zu können.',
		el_cy:
			'Το παιδί έχει δείξει μεγαλύτερη δυσκολία σε αυτόν τον τομέα. Είναι σημαντικό αυτό το παιδί να ανατραφεί σε αυτόν τον τομέα για να αποκτήσει αυτές τις μαθηματικές δεξιότητες.',
		tr: 'Öğrenci bu konuda büyük ölçüde zorlanmaktadır. Öğrencinin söz konusu matematiksel beceriye ulaşması için desteklenmesi büyük önem taşımaktadır.'
	},
	yellow_explanation: {
		en: "The child has shown partial difficulty in this area. It would be useful to review the child's mathematical skills in this area and foster them if necessary.",
		sv: 'Eleven har delvis haft svårt på detta område. Det kan vara bra om elevens matematiska färdigheter inom detta område ses över och att eleven får stöd vid behov.',
		de: 'Das Kind hat in diesem Bereich teilweise Schwierigkeiten gezeigt. Es wäre sinnvoll, die mathematischen Fähigkeiten des Kindes in diesem Bereich zu überprüfen und gegebenenfalls zu fördern.',
		el_cy:
			'Το παιδί έχει δείξει μερική δυσκολία σε αυτόν τον τομέα. Θα ήταν χρήσιμο να επανεξετάσουμε τις μαθηματικές δεξιότητες του παιδιού σε αυτόν τον τομέα και να τις καλλιεργήσουμε αν χρειαστεί.',
		tr: 'Öğrenci bu konuda kısmen zorlanmıştır. Öğrencinin bu konudaki matematiksel becerisinin gözden geçirilmesi ve gerektiğinde kendisinin teşvik edilmesi öneriliyor.'
	},
	green_explanation: {
		en: 'The child has not shown any difficulties in this area.',
		sv: 'Eleven har inte visat några svårigheter på detta område.',
		de: 'Das Kind hat in diesem Bereich keine Schwierigkeiten gezeigt.',
		el_cy: 'Το παιδί δεν έχει παρουσιάσει δυσκολίες σε αυτόν τον τομέα.',
		tr: 'Öğrenci bu konuda zorlanmamıştır.'
	},
	support_material: {
		en: 'Support material',
		sv: 'Stödmaterial',
		de: 'Fördermaterial',
		el_cy: 'Υλικό υποστήριξης',
		tr: 'Geliştirmeye yönelik materyaller'
	},
	basic_support: {
		en: 'Basic support',
		sv: 'Grundläggande stöd',
		de: 'Basisförderung',
		el_cy: 'Βασική υποστήριξη',
		tr: 'Temel donanım'
	},
	supplementary_material: {
		en: 'Supplementary material',
		sv: 'Kompletterande material',
		de: 'Zusatzmaterial',
		el_cy: 'Συμπληρωματική υποστήριξη',
		tr: 'Ek materyaller'
	},
	legend: {
		en: 'Legend',
		sv: 'Färgförklaring',
		de: 'Legende',
		el_cy: 'Εξήγηση',
		tr: 'Kullanılan işaretlerin anlamı'
	},
	remove: {
		en: 'Remove student',
		sv: 'Ta bort elev',
		de: 'Schüler*in entfernen',
		el_cy: 'Αφαίρεση μαθητή',
		tr: 'Öğrenci çıkar'
	},
	sure_remove_student: {
		en: 'Are you sure you want to remove the student? All data for the student will be removed.',
		sv: 'Är du säker på att du vill ta bort eleven? All data för eleven kommer att tas bort.',
		de: 'Möchten Sie den Schüler*in wirklich entfernen? Alle Daten des Schüler*innen werden gelöscht.',
		el_cy:
			'Είστε βέβαιοι ότι θέλετε να αφαιρέσετε τον μαθητή; Όλα τα δεδομένα για τον μαθητή θα αφαιρεθούν.',
		tr: 'Öğrenciyi kaldırmak istediğinizden emin misiniz? Öğrenciye ait tüm veriler kaldırılacaktır.'
	},
	yes: {
		en: 'Yes',
		sv: 'Ja',
		de: 'Ja',
		el_cy: 'Ναί',
		tr: 'Evet'
	},
	no: {
		en: 'No',
		sv: 'Nej',
		de: 'Nein',
		el_cy: 'Οχι',
		tr: 'Hayır'
	},
	remove_class: {
		en: 'Remove class',
		sv: 'Ta bort klass',
		de: 'Klasse entfernen',
		el_cy: 'Κατάργηση τάξης',
		tr: 'Sınıfı sil'
	},
	sure_remove_class: {
		en: 'Are you sure you want to remove this class? All students and their completed tasks will be REMOVED!',
		sv: 'Är du säker på att du vill ta bort den här klassen? Alla elever och deras utförda uppgifter kommer att TAS BORT!',
		de: 'Möchten Sie diese Klasse wirklich entfernen? Alle Schüler und ihre erledigten Aufgaben werden ENTFERNT!',
		el_cy:
			'Είστε βέβαιοι ότι θέλετε να καταργήσετε αυτήν την τάξη; Όλοι οι μαθητές και οι ολοκληρωμένες εργασίες τους θα ΑΦΑΙΡΟΥΝΤΑΙ!',
		tr: 'Bu sınıfı kaldırmak istediğinizden emin misiniz? Tüm öğrenciler ve tamamladıkları görevler KALDIRILACAK!'
	},
	icon_title: {
		en: 'Kids’ view on the tasks',
		sv: 'Elevernas uppgiftsvy',
		de: 'Kinderansicht der Aufgaben',
		el_cy: 'Η άποψη των παιδιών για τις εργασίες',
		tr: 'Çocukların görevlere bakış açısı'
	},
	select_tasks: {
		en: 'Select tasks',
		sv: 'Välj uppgifter',
		de: 'Wählen Sie Aufgaben aus',
		el_cy: 'Επιλέξτε εργασίες',
		tr: 'Ödevleri seçiniz'
	},
	no_selected_tasks: {
		en: 'The user has no selected tasks',
		sv: 'Användaren har inga valda uppgifter',
		de: 'Der Benutzer hat keine ausgewählten Aufgaben',
		el_cy: 'Ο χρήστης δεν έχει επιλεγμένες εργασίες',
		tr: 'Kullanıcı henüz ödev seçmedi'
	},
	edit_tasks: {
		en: 'Edit tasks',
		sv: 'Ändra uppgifter',
		de: 'Aufgaben bearbeiten',
		el_cy: 'Επεξεργασία εργασιών',
		tr: 'Ödevleri işle'
	},
	close: {
		en: 'Close',
		sv: 'Stäng',
		de: 'Schließen',
		el_cy: 'Κλείσε',
		tr: 'Kapat'
	},
	save: {
		en: 'Save',
		sv: 'Spara',
		de: 'Speichern',
		el_cy: 'Αποθηκεύσετε',
		tr: 'Kaydetmek'
	},
	print_users: {
		en: 'Print student list',
		sv: 'Skriv ut elevlista',
		de: 'Schüler*innenliste drucken',
		el_cy: 'Εκτύπωση λίστας μαθητών',
		tr: 'Öğrenci listesini yazdır'
	},
	print_overview: {
		en: 'Print student overview',
		sv: 'Skriv ut elevöversikt',
		de: 'Schüler*innenübersicht drucken',
		el_cy: 'Εκτύπωση επισκόπησης μαθητή',
		tr: 'Öğrencilerin isim tablosunu yazdır'
	},
	reset_password: {
		en: 'Reset password',
		sv: 'Återställ lösenord',
		de: 'Passwort zurücksetzen',
		el_cy: 'Επαναφέρετε τον κωδικό πρόσβασης',
		tr: 'Şifreyi sıfırla'
	},
	create_class_first: {
		en: 'Create the class first, and then you can add students',
		sv: 'Skapa en klass först, sen kan du lägga till elever',
		de: 'Erstellen Sie zuerst die Klasse und dann können Sie Schüler*innen hinzufügen',
		el_cy: 'Δημιουργήστε πρώτα την τάξη και μετά μπορείτε να προσθέσετε μαθητές',
		tr: 'Önce sınıfı oluşturun, ardından öğrencileri ekleyebilirsiniz'
	},
	show_class: {
		en: 'Show class',
		sv: 'Visa klassen',
		de: 'Klasse zeigen',
		el_cy: 'Εμφάνιση τάξης',
		tr: 'Sınıfı göster'
	},
	student_answers: {
		en: 'Student answers',
		sv: 'Elevens svar',
		de: 'Antworten der Schüler*in',
		el_cy: 'Απαντάει ο μαθητής',
		tr: 'Öğrencilerin yanıtları'
	},
	answer: {
		en: 'Student answer',
		sv: 'Elevens svar',
		de: 'Antwort der Schüler*in',
		el_cy: 'Απάντηση μαθητή',
		tr: 'Öğrencinin yanıtı'
	},
	right_answer: {
		en: 'Right answer',
		sv: 'Rätt svar',
		de: 'Richtige Antwort',
		el_cy: 'Σωστή απάντηση',
		tr: 'Doğru yanıt'
	},
	time_to_answer: {
		en: 'Time to answer',
		sv: 'Tid för att svar',
		de: 'Zeit zu antworten',
		el_cy: 'Ώρα να απαντήσω',
		tr: 'Cevap verme zamanı'
	},
	equal: {
		en: 'Equal',
		sv: 'Lika',
		de: 'Gleich',
		el_cy: 'Ισος',
		tr: 'Eşit'
	},
	yellow: {
		en: 'Yellow',
		sv: 'Gul',
		de: 'Gelb',
		el_cy: 'Κίτρινος',
		tr: 'Sarı'
	},
	blue: {
		en: 'Blue',
		sv: 'Blå',
		de: 'Blau',
		el_cy: 'Μπλε',
		tr: 'Mavi'
	},
	red: {
		en: 'Red',
		sv: 'Röd',
		de: 'Rot',
		el_cy: 'το κόκκινο',
		tr: 'Kırmızı'
	},
	skip: {
		en: 'Skip',
		sv: 'Hoppa över',
		de: 'Überspringen',
		el_cy: 'Παραλείπω',
		tr: 'Atlamak'
	}
};

export type I18NPrintKey = 'student_list_header';

export const i18nPrint: {
	[key in I18NPrintKey]: {
		en: string;
		sv: string;
		de: string;
		el_cy: string;
		tr: string;
	};
} = {
	student_list_header: {
		en: 'Students',
		sv: 'Elever',
		de: 'Schüler*innen',
		el_cy: 'Φοιτητές',
		tr: 'Öğrenciler'
	}
};

export type Languages = 'en' | 'de' | 'sv' | 'el_cy' | 'tr';
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
	},
	{
		language: 'tr',
		text: 'Türkçe',
		icon: '🇹🇷'
	}
];
