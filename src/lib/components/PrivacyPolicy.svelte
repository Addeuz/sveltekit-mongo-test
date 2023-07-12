<script lang="ts">
	export let accepted: boolean;

	let scrollDiv: HTMLDivElement;
	let isBottomScrolled = false;

	$: if (accepted) {
		localStorage.setItem('privacy-policy', 'accepted');
	}
</script>

<h1>Privacy Policy</h1>
<div
	bind:this={scrollDiv}
	class="h-[600px] overflow-y-scroll"
	on:scroll={() => {
		isBottomScrolled = scrollDiv
			? Math.abs(scrollDiv.scrollHeight - scrollDiv.scrollTop - scrollDiv.clientHeight) < 1
			: false;
	}}
>
	<ol class="space-y-1 list-decimal list-inside">
		<li>
			<span>
				{'General\nDIDUNAS is a digital math app that you can use on https://didunas.vercel.app/.\nThe protection of your data is particularly important to us. We collect as little data as possible and do not share it with third parties.'}
			</span>
		</li>
		<li>
			What data does DIDUNAS store?
			<ol class="space-y-1 list-decimal list-inside">
				<li>
					<span
						>{'Data that you provide to us\nIf you want to register as a teacher, we will ask you for your name and email address.\nIf you are a teacher or a person working at a school and you create a class and registration codes for your students, you are responsible for data protection.\nPlease only use nicknames that would not allow a third party to identify the students.'}</span
					>
				</li>
				<li>
					<span
						>{'Information that we automatically receive through your use of DIDUNAS\nWhen you use DIDUNAS, DIDUNAS stores data about your usage on our server. This includes: content you create, such as classes and students created, your device type, operating system and internet browser.'}</span
					>
				</li>
			</ol>
		</li>
		<li>
			<span>
				{'What is this data used for?\nThe stored data is used exclusively to offer you DIDUNAS.'}</span
			>
		</li>
		<li>
			<span>
				{'How long will the data be stored?\nYour data will be stored for as long as you use DIDUNAS.\nYour personal data will be deleted or blocked as soon as the purpose of storage no longer applies. Storage may take place beyond this if this has been provided for by the European or national legislator in Union regulations, laws or other regulations to which the responsible party is subject. Data will also be blocked or deleted if a storage period prescribed by the aforementioned standards expires, unless there is a need to continue storing the data for the conclusion or performance of a contract.'}</span
			>
		</li>
		<li>
			<span>
				{'Does DIDUNAS pass on data to third parties?\nNo, we do not share your data with third parties unless users have previously given their explicit consent or there is a legal obligation to share data.\nWe do not use Google, Facebook, Amazon or other product integrations in DIDUNAS, i.e. your data remains on our servers.'}</span
			>
		</li>
		<li>
			<span>
				{'How is the security of the data guaranteed?\nAll data is stored exclusively on servers in the EU and transmitted in encrypted form. The data centers meet the highest security standards and are certified according to DIN ISO/IEC 27001.\nAt the same time, users should be aware of the fact that due to the constant emergence of new viruses and other means of attacking secured data systems of Internet services, one hundred percent protection against attacks cannot be guaranteed.\nWe will pursue any attack discovered by hackers and the like under civil and criminal law and inform users of any compromise of data.'}</span
			>
		</li>
		<li>
			<span>
				{'Your rights'}
			</span>
			<ol class="space-y-1 mt-2 list-decimal list-inside">
				<li value="2">
					<span
						>{'Right of information\nUsers have the right to receive information free of charge about the personal data stored about them.'}</span
					>
				</li>
				<li>
					<span
						>{'Right to rectification\nYou have the right to rectification and/or completion if the processed personal data concerning you is incorrect or incomplete.'}</span
					>
				</li>
				<li>
					<span
						>{'Right to restriction of processing\nUnder the following conditions, you may request the restriction of the processing of personal data concerning you:\n\na. If you dispute the accuracy of the personal data concerning you for a period of time that allows us to verify the accuracy of the personal data.\n\nb. The processing is unlawful and you object to the erasure of the personal data and request instead the restriction of the use of the personal data.\n\nc. We no longer need the personal data for the purposes of processing, but you need it for the assertion, exercise or defense of legal claims.\n\nd. If you have objected to the processing pursuant to Article 21 (1) DSGVO and it has not yet been determined whether the legitimate grounds of the controller outweigh your grounds.\n\ne. If the processing of personal data concerning you has been restricted, such data may - apart from being stored - only be processed with your consent or for the assertion, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the Union or a Member State. If the restriction of processing has been restricted in accordance with the above conditions, you will be informed by us before the restriction is lifted.'}</span
					>
				</li>
				<li>
					<span
						>{'Right to erasure\nUpon request, we will delete your user data. To do so, please send us an email with the following identifying information: user*name and email address.'}</span
					>
				</li>
				<li>
					<span
						>{'Right to data portability\nYou have the right to request a copy of your personal data in electronic format. Upon request, we will send you a file containing your personal data. To do so, please send us an email with the following identifying information: user name and email address.'}</span
					>
				</li>
				<li>
					<span
						>{'Right of objection\nYou have the right to object at any time, on grounds relating to your particular situation, to the processing of personal data relating to you which is carried out on the basis of Article 6(1)(e) or (f) DSGVO.'}</span
					>
				</li>
				<li>
					<span
						>{'Right to revoke the declaration of consent under data protection law\nYou have the right to revoke your declaration of consent under data protection law at any time. The revocation of the consent does not affect the lawfulness of the processing carried out on the basis of the consent until the revocation.'}</span
					>
				</li>
			</ol>
		</li>
		<li>
			<span>
				{'What is the legal basis for processing?\nInsofar as we obtain the consent of the data subject for processing operations of personal data, Art. 6 (1) lit. a EU General Data Protection Regulation (GDPR) serves as the legal basis.When processing personal data that is necessary for the performance of a contract to which the data subject is a party, Art. 6 (1) lit. b DSGVO serves as the legal basis. This also applies to processing operations that are necessary for the performance of pre-contractual measures.\nIf processing of personal data is necessary for compliance with a legal obligation to which our company is subject, Art. 6 (1) c DSGVO serves as the legal basis.\nIf processing is necessary to protect a legitimate interest of our company or a third party and if the interests, fundamental rights and freedoms of the data subject do not override the first-mentioned interest, Art. 6 (1) f DSGVO serves as the legal basis for the processing.'}</span
			>
		</li>
		<li>
			<span>
				{'Explanation of terms\nEU GDPR: Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data, on the free movement of such data and repealing Directive 95/46/EC (General Data Protection Regulation).\nPersonal Data: According to Art. 4(1) EU GDPR, any information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.'}</span
			>
		</li>
	</ol>
</div>
<div class="flex justify-end mt-4">
	<div class="flex gap-2">
		<input
			bind:checked={accepted}
			type="checkbox"
			id="privacy-policy"
			disabled={!isBottomScrolled}
		/>
		<label for="privacy-policy" class={!isBottomScrolled ? 'text-gray-400' : ''}
			>I have read the privacy policy</label
		>
	</div>
</div>

<style>
	ol {
		counter-reset: item;
	}
	li {
		display: block;
	}
	li:before {
		content: counters(item, '.') '. ';
		counter-increment: item;
	}

	span {
		white-space: pre-wrap;
	}
</style>
