"use strict";

    const questions = [
      { question: "Какова главная задача коммерческой рекламы?", answers: ["Информировать, убеждать и побуждать к покупке товара или услуги", "Заменять собой инструкцию по использованию товара", "Рассказывать только о новостях компании"], correct: 0, explanation: "Коммерческая реклама помогает представить предложение аудитории и повлиять на решение о покупке." },
      { question: "Что лучше всего описывает социальную рекламу?", answers: ["Реклама со скидкой для участников благотворительной акции", "Сообщения, которые привлекают внимание к общественно важным проблемам", "Любое объявление, размещённое в социальных сетях"], correct: 1, explanation: "Социальная реклама поднимает важные для общества темы, например безопасность, здоровье или бережное отношение к природе." },
      { question: "Как называется реклама, которая распространяется через телевидение, радио, печать и наружные носители?", answers: ["Партизанская реклама", "Контекстная реклама", "Традиционная реклама"], correct: 2, explanation: "К традиционным каналам относят, например, телевидение, радио, газеты, журналы и наружные конструкции." },
      { question: "Что обычно называют целевой аудиторией?", answers: ["Людей, которым адресовано рекламное сообщение", "Сотрудников, которые создают рекламный макет", "Всех, кто когда-либо видел рекламу"], correct: 0, explanation: "Целевая аудитория — группа людей, для которой предназначены продукт, услуга или рекламное сообщение." },
      { question: "Какова одна из ключевых ролей рекламы для покупателя?", answers: ["Гарантировать, что товар подойдёт каждому", "Помочь узнать о предложениях и сравнить их", "Полностью убрать необходимость изучать товар"], correct: 1, explanation: "Реклама сообщает о существовании предложений и может помочь человеку обратить на них внимание и сопоставить варианты." },
      { question: "Что отличает цифровую рекламу?", answers: ["Она размещается только в мобильных приложениях", "Её можно показывать только один раз одному человеку", "Она распространяется через цифровые каналы, например сайты и приложения"], correct: 2, explanation: "Цифровая реклама использует онлайн-каналы: сайты, поисковые системы, приложения и другие цифровые площадки." },
      { question: "Что такое социальное доказательство в рекламе?", answers: ["Отзывы и рекомендации других людей о продукте", "Подтверждение того, что объявление опубликовано в соцсети", "Перечень законов о рекламной деятельности"], correct: 0, explanation: "Отзывы, оценки и рекомендации могут помочь аудитории понять опыт других людей и сформировать доверие." },
      { question: "Как называется реклама, встроенная в сюжет фильма или сериала?", answers: ["Тизерная реклама", "Продакт-плейсмент", "Почтовая рассылка"], correct: 1, explanation: "Продакт-плейсмент — это интеграция бренда или товара в содержание фильма, сериала, игры или другого материала." },
      { question: "Для чего компании используют имиджевую рекламу?", answers: ["Чтобы заменить обслуживание клиентов", "Чтобы сообщить только цену товара", "Чтобы сформировать или укрепить образ бренда"], correct: 2, explanation: "Имиджевая реклама помогает людям узнавать бренд и связывать его с определёнными ценностями или впечатлениями." },
      { question: "Какой пример относится к наружной рекламе?", answers: ["Билборд вдоль дороги", "Личное письмо покупателю", "Рекламная вставка в подкасте"], correct: 0, explanation: "Наружную рекламу размещают вне помещений: например, на билбордах, городских экранах или остановках." },
      { question: "Что обычно делает рекламный слоган?", answers: ["Содержит весь договор между продавцом и покупателем", "Коротко передаёт идею или обещание бренда", "Перечисляет все характеристики товара"], correct: 1, explanation: "Хороший слоган кратко и запоминаемо выражает ключевую мысль рекламной кампании или бренда." },
      { question: "Что означает призыв к действию в рекламе?", answers: ["Подробное описание истории создания компании", "Список конкурирующих товаров", "Подсказка аудитории о следующем шаге, например «узнать больше»"], correct: 2, explanation: "Призыв к действию (CTA) предлагает понятный следующий шаг: перейти, подписаться, записаться или узнать подробности." },
      { question: "Какую роль играет реклама в конкуренции между компаниями?", answers: ["Помогает представить отличия и преимущества предложений", "Автоматически устанавливает одинаковые цены", "Отменяет необходимость улучшать продукт"], correct: 0, explanation: "С помощью рекламы компании сообщают о своих особенностях, чтобы аудитория могла заметить разницу между предложениями." },
      { question: "Что такое контекстная реклама в интернете?", answers: ["Объявление, напечатанное на упаковке товара", "Реклама, связанная с содержанием страницы или поисковым запросом", "Сообщение, которое показывают только друзьям автора"], correct: 1, explanation: "Контекстная реклама подбирается с учётом интересов, содержания страницы или запроса пользователя." },
      { question: "Почему важно, чтобы реклама была правдивой и не вводила в заблуждение?", answers: ["Чтобы каждое объявление было одинаковым", "Чтобы в рекламе не приходилось указывать бренд", "Чтобы люди могли принимать информированные решения и сохранялось доверие"], correct: 2, explanation: "Достоверная информация уважает аудиторию, поддерживает доверие и помогает принимать осознанные решения." },
      { question: "Что называют рекламным охватом?", answers: ["Количество людей, которые увидели рекламное сообщение", "Сумму, потраченную на производство товара", "Длину рекламного ролика в секундах"], correct: 0, explanation: "Охват показывает, сколько уникальных людей увидели сообщение за выбранный период." },
      { question: "Как называется бесплатная рекомендация товара человеком, который им доволен?", answers: ["Таргетинг", "Сарафанное радио", "Медиапланирование"], correct: 1, explanation: "Сарафанное радио — обмен мнениями и рекомендациями между людьми, часто основанный на личном опыте." },
      { question: "Зачем рекламу адаптируют для разных аудиторий и площадок?", answers: ["Чтобы изменить качество самого продукта", "Чтобы скрыть условия покупки", "Чтобы сообщение было уместным и понятным конкретной аудитории"], correct: 2, explanation: "У разных людей и площадок разные контекст и потребности, поэтому подходящая подача делает сообщение понятнее." },
      { question: "Что помогает оценить, сработала ли рекламная кампания?", answers: ["Заранее выбранные показатели, например переходы или заявки", "Только количество цветов в макете", "Мнение одного случайного прохожего"], correct: 0, explanation: "Результат оценивают по целям и метрикам кампании: например, охвату, переходам, обращениям или продажам." },
      { question: "Какой подход к рекламе наиболее ответственен?", answers: ["Обещать невозможный результат ради внимания", "Уважать аудиторию, проверять факты и ясно обозначать рекламный характер сообщения", "Скрывать важные условия мелким шрифтом"], correct: 1, explanation: "Ответственная реклама честна, уважительна и позволяет людям понять, что перед ними рекламное сообщение." }
    ];

    const letters = ["А", "Б", "В"];
    const checkIcon = '<svg class="answer-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m4 10 4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const crossIcon = '<svg class="answer-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    let currentQuestion = 0;
    let correctCount = 0;
    let answered = false;

    const questionCount = document.getElementById("questionCount");
    const progressBar = document.getElementById("progressBar");
    const progressTrack = document.querySelector('[role="progressbar"]');
    const questionKicker = document.getElementById("questionKicker");
    const questionText = document.getElementById("questionText");
    const answersContainer = document.getElementById("answers");
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("nextButton");
    const scoreMini = document.getElementById("scoreMini");
    const quizCard = document.getElementById("quizCard");
    const resultScreen = document.getElementById("resultScreen");

    function renderQuestion() {
      const item = questions[currentQuestion];
      const displayNumber = String(currentQuestion + 1).padStart(2, "0");
      questionCount.textContent = displayNumber + " / " + questions.length;
      questionKicker.textContent = "ВОПРОС " + displayNumber;
      questionText.textContent = item.question;
      progressBar.style.width = ((currentQuestion + 1) / questions.length * 100) + "%";
      progressTrack.setAttribute("aria-valuenow", String(currentQuestion + 1));
      answersContainer.replaceChildren();
      feedback.className = "feedback";
      feedback.replaceChildren();
      answered = false;
      nextButton.disabled = true;
      nextButton.querySelector("span").textContent = currentQuestion === questions.length - 1 ? "К результатам" : "Следующий вопрос";

      item.answers.forEach(function (answer, index) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer";
        button.setAttribute("aria-label", letters[index] + ". " + answer);
        button.innerHTML = '<span class="answer-letter">' + letters[index] + '</span><span class="answer-text"></span>';
        button.querySelector(".answer-text").textContent = answer;
        button.addEventListener("click", function () { selectAnswer(index); });
        answersContainer.appendChild(button);
      });
    }

    function selectAnswer(selectedIndex) {
      if (answered) return;
      answered = true;
      const item = questions[currentQuestion];
      const isCorrect = selectedIndex === item.correct;
      const buttons = answersContainer.querySelectorAll(".answer");

      buttons.forEach(function (button, index) {
        button.disabled = true;
        if (index === item.correct) {
          button.classList.add("correct");
          button.insertAdjacentHTML("beforeend", checkIcon);
        } else if (index === selectedIndex) {
          button.classList.add("incorrect");
          button.insertAdjacentHTML("beforeend", crossIcon);
        }
      });

      if (isCorrect) {
        correctCount += 1;
        feedback.className = "feedback show good";
        feedback.innerHTML = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m4 10 4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><div><strong>Верно!</strong></div>';
      } else {
        feedback.className = "feedback show bad";
        feedback.innerHTML = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.7"/><path d="M10 6v4m0 3h.01" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg><div><strong>Не совсем. Правильный ответ: ' + letters[item.correct] + '. ' + escapeHtml(item.answers[item.correct]) + '</strong>' + escapeHtml(item.explanation) + '</div>';
      }

      scoreMini.textContent = correctCount + " из " + questions.length;
      nextButton.disabled = false;
      if (currentQuestion < questions.length - 1) {
        nextButton.focus();
      }
    }

    function escapeHtml(value) {
      return value.replace(/[&<>"']/g, function (character) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
      });
    }

    function showResults() {
      const incorrectCount = questions.length - correctCount;
      const percent = Math.round(correctCount / questions.length * 100);
      document.getElementById("scorePercent").textContent = percent + "%";
      document.getElementById("correctTotal").textContent = String(correctCount);
      document.getElementById("incorrectTotal").textContent = String(incorrectCount);
      document.getElementById("resultPoints").textContent = "Результат: " + correctCount + " из " + questions.length + " баллов";

      if (percent === 100) {
        document.getElementById("resultTitle").textContent = "Идеальный результат!";
        document.getElementById("resultCopy").textContent = "Ты отлично разбираешься в рекламе — ни одной ошибки!";
      } else if (percent >= 75) {
        document.getElementById("resultTitle").textContent = "Отличная работа!";
        document.getElementById("resultCopy").textContent = "Ты хорошо понимаешь, как устроена реклама. Так держать!";
      } else if (percent >= 50) {
        document.getElementById("resultTitle").textContent = "Хорошее начало!";
        document.getElementById("resultCopy").textContent = "Ты уже знаешь немало. Пройди викторину ещё раз, чтобы закрепить знания.";
      } else {
        document.getElementById("resultTitle").textContent = "Время узнать больше!";
        document.getElementById("resultCopy").textContent = "Теперь ты знаешь больше о рекламе. Попробуй пройти викторину ещё раз!";
      }

      quizCard.classList.add("finished");
      resultScreen.classList.add("show");
      document.getElementById("restartButton").focus();
    }

    nextButton.addEventListener("click", function () {
      if (!answered) return;
      if (currentQuestion === questions.length - 1) {
        showResults();
        return;
      }
      currentQuestion += 1;
      renderQuestion();
      questionText.focus({ preventScroll: true });
    });

    document.getElementById("restartButton").addEventListener("click", function () {
      currentQuestion = 0;
      correctCount = 0;
      scoreMini.textContent = "0 из " + questions.length;
      quizCard.classList.remove("finished");
      resultScreen.classList.remove("show");
      renderQuestion();
      document.getElementById("questionText").focus({ preventScroll: true });
    });

    questionText.setAttribute("tabindex", "-1");
    renderQuestion();
