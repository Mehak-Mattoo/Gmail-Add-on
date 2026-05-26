function onGmailMessage(e) {
  const thread = GmailApp.getThreadById(e.gmail.threadId);
  const messages = thread.getMessages();
  const lastMessage = messages[messages.length - 1];
  const subject = lastMessage.getSubject() || "No subject";
  const body = lastMessage.getPlainBody().substring(0, 300);

  return CardService.newCardBuilder()
    .setHeader(appHeader(subject))
    .addSection(
      CardService.newCardSection()
        .setHeader("Email Preview")
        .addWidget(CardService.newTextParagraph().setText(body))
        .addWidget(divider())
        .addWidget(primaryButton(
          "✨ Generate Draft Reply",
          "onGenerateClicked",
          { subject: subject, body: body }
        ))
    )
    .build();
}

function onGenerateClicked(e) {
  const subject = e.parameters.subject;
  const body = e.parameters.body;

  const generatedDraft =
    "Hi,\n\n" +
    "Thank you for reaching out regarding \"" + subject + "\".\n\n" +
    "I have reviewed your message and will follow up shortly.\n\n" +
    "Best regards";

  return CardService.newActionResponseBuilder()
    .setNavigation(
      CardService.newNavigation().pushCard(buildDraftCard(generatedDraft))
    )
    .build();
}

function buildDraftCard(draftText) {
  return CardService.newCardBuilder()
    .setHeader(appHeader("Generated Draft"))
    .addSection(
      CardService.newCardSection()
        .addWidget(CardService.newTextParagraph().setText(draftText))
        .addWidget(divider())
        .addWidget(successButton(
          "📩 Insert as Reply",
          "onInsertClicked",
          { draft: draftText }
        ))
        .addWidget(neutralButton(
          "← Back",
          "onBack",
          {}
        ))
    )
    .build();
}

function onInsertClicked(e) {
  const draft = e.parameters.draft;
  const message = GmailApp.getMessageById(e.gmail.messageId);
  message.getThread().createDraftReply(draft);

  return CardService.newActionResponseBuilder()
    .setNotification(
      CardService.newNotification()
        .setText("✅ Draft saved to Gmail Drafts!")
    )
    .build();
}

function onBack() {
  return CardService.newActionResponseBuilder()
    .setNavigation(CardService.newNavigation().popCard())
    .build();
}