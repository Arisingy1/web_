import { mkdirSync, writeFileSync } from 'fs';

const data = {
  artifact_metadata: {
    analyzed_documents: [
      'Холакратия: Правила сотрудничества, Домены, Структура команды',
      'Холакратия: Законодательный и Операционный (Тактический) процессы',
      'Процесс Онбординга и Адаптации',
      'Разработчикам: CI/CD, Отчетность (time reporting), Code-review',
    ],
    total_text_volume_chars: 23500,
    confidence_score: 95,
  },
  general_info: {
    industry: 'IT / Tech',
    tone_of_voice: 'Формальный / Регламентированный',
  },
  authenticity_index: 'High',
  authenticity_reason:
    'Документы содержат высокую детализацию реальных бизнес-процессов, метрик и операционных регламентов; декларации подкреплены конкретными процедурами и чек-листами.',
  executive_summary: {
    culture_uniqueness:
      "Бескомпромиссная реализация фреймворка Холакратии. Культура радикальной прозрачности и тотальной регламентации полномочий, где личные инициативы переведены в жестко структурированный 'законодательный процесс', а люди рассматриваются как 'роли' с долей собственности (доменами).",
    culture_type: 'Процессно-инженерная Холакратия',
    key_findings:
      'Документы демонстрируют высокую степень зрелости и операционализации процессов. Абстрактные ценности полностью заменены жесткими правилами, чек-листами (DoD) и скриптами ведения встреч с запретом на спонтанные дискуссии.',
    dominant_values: [
      'Радикальная прозрачность',
      'Неприкосновенность зон ответственности (доменов)',
      'Безупречное следование процессу и регламентам',
    ],
    cultural_contradictions: [
      'Декларируется полная автономия внутри роли, однако процессы тайм-трекинга, код-ревью и регламенты встреч накладывают беспрецедентно жесткие бюрократические рамки на любой шаг сотрудника.',
    ],
  },
  big_nine_detailed_analysis: {
    agility: {
      score: 55,
      summary:
        'Гибкость ограничена тяжеловесной процедурой согласований. Изменения возможны, но только через строгий законодательный алгоритм.',
      modal_content: {
        detailed_gap_analysis:
          "Хотя архитектура ролей позволяет адаптироваться, на практике любые структурные изменения требуют формального тестирования Возражений. Отсутствие 'гибкости' компенсируется 'бережливыми инновациями', упакованными в системные регламенты.",
        contributing_ocp_parameters: [
          { id: 1, name_en: 'Flexibility', name_ru: 'Гибкость', score: 40, is_declarative: false, micro_reason: 'Структурная гибкость задавлена процессуальными ограничениями.', evidence_quote: 'Любой Член команды может предложить внести изменения в Законодательство, выдвинув Предложение' },
          { id: 2, name_en: 'Adaptability', name_ru: 'Адаптивность', score: 65, is_declarative: false, micro_reason: 'Четкий, предсказуемый процесс адаптации новых сотрудников.', evidence_quote: 'Процесс адаптации поможет вам успешно интегрироваться в компанию и начать эффективно работать.' },
          { id: 4, name_en: 'Being quick to take advantage of opportunities', name_ru: 'Быстрое использование возможностей', score: 50, is_declarative: true, micro_reason: 'Скорость реакции снижается из-за необходимости соблюдать конституцию Холакратии.', evidence_quote: 'сомнение всегда считается Возражением, если принятие Предложения нарушит любое положение Конституции.' },
          { id: 5, name_en: 'A willingness to experiment', name_ru: 'Готовность к экспериментам', score: 65, is_declarative: false, micro_reason: 'Эксперименты формализованы через R&D процессы и PoC.', evidence_quote: 'Создавать и тестировать Proof of Concept (PoC) для проверки гипотез о применимости технологии' },
        ],
      },
    },
    collaboration: {
      score: 74,
      summary: 'Совместная работа построена на взаимных обязательствах прозрачности и приоритетном реагировании на запросы других ролей.',
      modal_content: {
        detailed_gap_analysis: "Коллаборация лишена неформальности. Это институционализированное сотрудничество, где помощь коллегам диктуется 'Правилами сотрудничества' и четкими границами, а не личной эмпатией.",
        contributing_ocp_parameters: [
          { id: 32, name_en: 'Being team oriented', name_ru: 'Командная ориентация', score: 80, is_declarative: false, micro_reason: 'Внедрен обязательный перекрестный контроль результатов.', evidence_quote: 'все члены команды проверяют код друг друга, прежде чем передавать его в тестирование.' },
          { id: 33, name_en: 'Sharing information freely', name_ru: 'Свободный обмен информацией', score: 90, is_declarative: false, micro_reason: 'Радикальная прозрачность закреплена как нормативное обязательство.', evidence_quote: 'Вы должны делиться информацией о любых Проектах и Следующих действиях, которые вы выполняете.' },
          { id: 34, name_en: 'Working in collaboration with others', name_ru: 'Совместная работа', score: 75, is_declarative: false, micro_reason: 'Синхронизация с командой ставится выше индивидуальных задач.', evidence_quote: 'Встречи важнее выполнения ваших задач' },
          { id: 35, name_en: 'Developing friends at work', name_ru: 'Дружеские отношения', score: 50, is_declarative: true, micro_reason: 'Дружба упомянута только в контексте функциональной роли Бадди при онбординге.', evidence_quote: 'Бадди: ваш друг и помощник, который поможет освоиться в компании' },
        ],
      },
    },
    customer: {
      score: 87,
      summary: 'Высочайшая ориентация на результат и качество, контролируемая через Definition of Done и автоматизированное тестирование.',
      modal_content: {
        detailed_gap_analysis: 'Процессы сфокусированы на том, чтобы исключить субъективность и человеческий фактор. Приоритизация Следующих действий и строгие критерии приемки кода обеспечивают постоянную поставку качественного продукта заказчику.',
        contributing_ocp_parameters: [
          { id: 21, name_en: 'Action orientation', name_ru: 'Ориентация на действие', score: 85, is_declarative: false, micro_reason: 'Запросы оперативно трансформируются в конкретные Следующие действия.', evidence_quote: 'Вас могут попросить взять в работу определённое Следующее действие или Проект.' },
          { id: 25, name_en: 'Being results oriented', name_ru: 'Ориентация на результат', score: 85, is_declarative: false, micro_reason: 'Результат должен быть автоматизированно доказан и задокументирован.', evidence_quote: 'Код поставляется с автоматизированными тестами на всех соответствующих уровнях' },
          { id: 27, name_en: 'An emphasis on quality', name_ru: 'Акцент на качестве', score: 90, is_declarative: false, micro_reason: 'Нулевая толерантность к критическим дефектам в продакшене.', evidence_quote: 'Для реализованного функционала нет дефектов с критическим приоритетом.' },
        ],
      },
    },
    diversity: {
      score: 72,
      summary: "Многообразие и справедливость обеспечиваются через концепцию 'доменов', защищающих личные границы сотрудника от авторитарного вмешательства.",
      modal_content: {
        detailed_gap_analysis: 'Равенство достигается через формализацию. В компании нет места предвзятости, так как регламент встреч запрещает эмоциональные реакции, а полномочия строго распределены. Однако это холодная, процедурная толерантность.',
        contributing_ocp_parameters: [
          { id: 14, name_en: 'Fairness', name_ru: 'Справедливость', score: 75, is_declarative: false, micro_reason: 'Все роли подчиняются одинаковым правилам, лидер не имеет абсолютной власти.', evidence_quote: 'Любой Член команды может запросить выборы, чтобы избрать или сменить исполнителя выборной Роли.' },
          { id: 15, name_en: "Respect for the individual's rights", name_ru: 'Уважение прав личности', score: 80, is_declarative: false, micro_reason: "Права защищены концепцией 'собственности' (Домена) внутри роли.", evidence_quote: 'Вы можете делать что угодно со своей собственностью (Доменом своей Роли), но не вторгаться на территорию соседа' },
          { id: 16, name_en: 'Tolerance', name_ru: 'Толерантность', score: 60, is_declarative: false, micro_reason: 'Толерантность навязывается через прямой запрет на комментарии и реакции на идеи коллег во время питчинга.', evidence_quote: 'Запрещаются любые реакции или мнения относительно Предложения.' },
        ],
      },
    },
    execution: {
      score: 85,
      summary: 'Выдающийся уровень исполнительской дисциплины. Задачи детализируются, коммиты строго оформляются, время трекается до минуты.',
      modal_content: {
        detailed_gap_analysis: 'Компания требует хирургической точности в отчетах и ведении проектов. Описание тайм-трекинга и CI/CD пайплайнов демонстрирует культуру микроменеджмента процессов (но не людей). Несоблюдение форматов влечет отказ в приемке работы.',
        contributing_ocp_parameters: [
          { id: 22, name_en: 'Achievement orientation', name_ru: 'Ориентация на достижения', score: 75, is_declarative: false, micro_reason: 'Успех адаптации жестко привязан к выполнению плана задач.', evidence_quote: 'содержит информацию о задачах, которые важно выполнить до конца испытательного срока.' },
          { id: 24, name_en: 'Having high expectations for performance', name_ru: 'Высокие ожидания', score: 80, is_declarative: false, micro_reason: 'Ожидается идеальное соблюдение стандартов описания задач.', evidence_quote: 'Команда тестирования вправе вернуть вам задачу, если не будет оставлен комментарий.' },
          { id: 28, name_en: 'Being analytical', name_ru: 'Аналитичность', score: 85, is_declarative: false, micro_reason: 'Процесс тестирования требует глубокой аналитической экспертизы требований.', evidence_quote: 'Проведение экспертизы требований для выявления пропущенных требований.' },
          { id: 29, name_en: 'Paying attention to detail', name_ru: 'Внимание к деталям', score: 90, is_declarative: false, micro_reason: 'Строгие требования к артефактам разработки и интеграции Jira/Gitlab.', evidence_quote: 'Каждый коммит должен содержать номер задачи и комментарий с описанием что было изменено.' },
          { id: 31, name_en: 'Being highly organized', name_ru: 'Высокая организованность', score: 95, is_declarative: false, micro_reason: 'Встречи проходят по таймеру с диктатурой регламента.', evidence_quote: 'Фасилитатор обязан придерживаться следующего регламента.' },
        ],
      },
    },
    innovation: {
      score: 41,
      summary: 'Инновации сильно ограничены регламентами. Риск-тейкинг сведен к минимуму из-за страха перед сбоями в архитектуре или нарушениями Конституции.',
      modal_content: {
        detailed_gap_analysis: "Любая инновация должна пройти многоуровневый фильтр безопасности и тестирования. Инициативы приветствуются, но 'отсутствие правил' (ключевой драйвер инноваций) здесь категорически подавляется. Это культура 'безопасных, медленных улучшений'.",
        contributing_ocp_parameters: [
          { id: 3, name_en: 'Being innovative', name_ru: 'Инновационность', score: 60, is_declarative: false, micro_reason: 'Инновации локализованы в профильных ролях (бережливые технологии).', evidence_quote: 'Исследование и валидация новых технологий' },
          { id: 5, name_en: 'A willingness to experiment', name_ru: 'Готовность к экспериментам', score: 65, is_declarative: false, micro_reason: 'Эксперименты обязательны, но ограничены форматом PoC.', evidence_quote: 'Создавать и тестировать Proof of Concept (PoC) для проверки гипотез' },
          { id: 6, name_en: 'Risk taking', name_ru: 'Готовность к риску', score: 30, is_declarative: false, micro_reason: 'Отношение к риску крайне консервативное; решения тестируются на предмет вреда Команде.', evidence_quote: 'Достаточно безопасно испытать Предложение, учитывая, что мы можем его пересмотреть в любое время?' },
          { id: 7, name_en: 'Not being constrained by many rules', name_ru: 'Отсутствие жестких ограничений', score: 10, is_declarative: false, micro_reason: 'Компания полностью управляется тотальными ограничениями.', evidence_quote: 'Комментировать запрещено. Отвечать запрещено.' },
        ],
      },
    },
    integrity: {
      score: 85,
      summary: 'Абсолютная структурная честность. Прозрачность процессов и четкое разграничение ответственности исключают скрытые конфликты.',
      modal_content: {
        detailed_gap_analysis: 'Система Холакратии снимает зависимость от личной порядочности и переносит Интегрити в поле регламентов. Конфликты (Напряжения) легализуются и открыто прорабатываются. За свою работу (домен) партнер несет единоличную, никем не перебиваемую ответственность.',
        contributing_ocp_parameters: [
          { id: 14, name_en: 'Fairness', name_ru: 'Справедливость', score: 75, is_declarative: false, micro_reason: 'Право изменять структуру организации есть у каждого через формальный процесс.', evidence_quote: 'Любой Член команды может предложить внести изменения в Законодательство' },
          { id: 41, name_en: 'Taking individual responsibility', name_ru: 'Личная ответственность', score: 90, is_declarative: false, micro_reason: 'Владение доменом приравнивается к единоличной ответственности.', evidence_quote: 'Владеть Доменом означает нести ответственность за соответствующую область деятельности.' },
          { id: 42, name_en: 'Confronting conflict directly', name_ru: 'Прямое разрешение конфликтов', score: 80, is_declarative: false, micro_reason: 'Сотрудников прямо обучают аргументированно отказывать и конструктивно спорить.', evidence_quote: 'Опишите случай, когда вы аргументированно отказали в запросе, но предложили альтернативу.' },
          { id: 54, name_en: 'Having a clear guiding philosophy', name_ru: 'Четкая философия', score: 95, is_declarative: false, micro_reason: 'Конституция является высшим законом, отменять который не имеет права никто.', evidence_quote: 'Никакая Команда не может изменить или убрать Домены Выборных ролей, данные этой Конституцией.' },
        ],
      },
    },
    performance: {
      score: 69,
      summary: 'Высокая требовательность к качеству артефактов и соблюдению отчетов, однако отсутствует связь с монетарным вознаграждением за перевыполнение.',
      modal_content: {
        detailed_gap_analysis: 'Культура фокусируется на избегании дефектов и соблюдении правил, а не на героическом перевыполнении планов. Требовательность к формату (отчеты, тайм-логи, код) экстремальная, но нет упоминаний KPI-бонусов за скорость или инновационный прорыв.',
        contributing_ocp_parameters: [
          { id: 22, name_en: 'Achievement orientation', name_ru: 'Ориентация на достижения', score: 75, is_declarative: false, micro_reason: 'Регулярная отчетность по целям встроена в обязательства маркетинга и других команд.', evidence_quote: 'Подготовка отчётов о проделанной работе и достижении целей' },
          { id: 23, name_en: 'Being demanding', name_ru: 'Требовательность', score: 85, is_declarative: false, micro_reason: 'Скрупулезные требования к формату данных (например, тайм-трекинг).', evidence_quote: 'Перед отправкой отчет необходимо отформатировать таким образом, чтобы остались только следующие колонки' },
          { id: 24, name_en: 'Having high expectations for performance', name_ru: 'Высокие ожидания', score: 80, is_declarative: false, micro_reason: 'Миссия напрямую транслирует ожидание нулевого процента ошибок.', evidence_quote: 'Безошибочное программное обеспечение, создаваемое в компании' },
          { id: 26, name_en: 'High pay for good performance', name_ru: 'Высокая оплата за результат', score: 35, is_declarative: true, micro_reason: "Финансовая мотивация лишь упомянута как наличие 'встреч по ЗП', механизмы не описаны.", evidence_quote: 'Таблица с вопросами для каждой адаптационной встречи, по итогам ИС, встречи по ЗП' },
        ],
      },
    },
    respect: {
      score: 64,
      summary: 'Уважение институционализировано через соблюдение ролевых границ. Эмоциональная поддержка регламентирована институтом Бадди.',
      modal_content: {
        detailed_gap_analysis: 'Это уважение юристов друг к другу: ты не лезешь в мой домен, я не нарушаю твой. Прямое общение суховато, эмоциональные поощрения в дефиците, но присутствует системная инфраструктура развития и обратной связи через процесс 360.',
        contributing_ocp_parameters: [
          { id: 14, name_en: 'Fairness', name_ru: 'Справедливость', score: 75, is_declarative: false, micro_reason: 'Честная, всесторонняя оценка по методу 360.', evidence_quote: 'Наблюдали ли вы улучшение профессиональных навыков партнера за последнее время?' },
          { id: 18, name_en: 'Being people oriented', name_ru: 'Ориентация на людей', score: 55, is_declarative: false, micro_reason: "Люди рассматриваются как ресурсы, которым нужна 'оптимальная нагрузка'.", evidence_quote: 'Оптимальная нагрузка на инженеров .Net направления' },
          { id: 17, name_en: 'Being supportive', name_ru: 'Поддержка', score: 70, is_declarative: false, micro_reason: 'Инфраструктура наставничества привязана к старту работы.', evidence_quote: 'Встречайтесь с вашим куратором и бадди для получения поддержки, обратной связи' },
          { id: 16, name_en: 'Tolerance', name_ru: 'Толерантность', score: 60, is_declarative: false, micro_reason: 'Пресечение токсичности достигается жестким запретом на дискуссии во время раундов.', evidence_quote: 'Запрещаются любые комментарии вне очереди, дискуссия, любые реакции на реакции других участников.' },
          { id: 19, name_en: 'Opportunities for professional growth', name_ru: 'Возможности для роста', score: 60, is_declarative: true, micro_reason: 'Ожидание роста зашито в анкеты 360, хотя конкретные пути не детализированы.', evidence_quote: 'Как вы оцениваете профессионализм партнера в его/ее области?' },
        ],
      },
    },
  },
  raw_ocp_profile: [
    { id: 1, name_en: 'Flexibility', score: 40, is_declarative: false },
    { id: 2, name_en: 'Adaptability', score: 65, is_declarative: false },
    { id: 3, name_en: 'Being innovative', score: 60, is_declarative: false },
    { id: 4, name_en: 'Being quick to take advantage of opportunities', score: 50, is_declarative: true },
    { id: 5, name_en: 'A willingness to experiment', score: 65, is_declarative: false },
    { id: 6, name_en: 'Risk taking', score: 30, is_declarative: false },
    { id: 7, name_en: 'Not being constrained by many rules', score: 10, is_declarative: false },
    { id: 8, name_en: 'Stability', score: 80, is_declarative: false },
    { id: 9, name_en: 'Predictability', score: 85, is_declarative: false },
    { id: 10, name_en: 'Being careful', score: 85, is_declarative: false },
    { id: 11, name_en: 'Being rule oriented', score: 95, is_declarative: false },
    { id: 12, name_en: 'Security of employment', score: 50, is_declarative: true },
    { id: 13, name_en: 'Low level of conflict', score: 75, is_declarative: false },
    { id: 14, name_en: 'Fairness', score: 75, is_declarative: false },
    { id: 15, name_en: "Respect for the individual's rights", score: 80, is_declarative: false },
    { id: 16, name_en: 'Tolerance', score: 60, is_declarative: false },
    { id: 17, name_en: 'Being supportive', score: 70, is_declarative: false },
    { id: 18, name_en: 'Being people oriented', score: 55, is_declarative: false },
    { id: 19, name_en: 'Opportunities for professional growth', score: 60, is_declarative: true },
    { id: 20, name_en: 'Offers praise for good performance', score: 40, is_declarative: true },
    { id: 21, name_en: 'Action orientation', score: 85, is_declarative: false },
    { id: 22, name_en: 'Achievement orientation', score: 75, is_declarative: false },
    { id: 23, name_en: 'Being demanding', score: 85, is_declarative: false },
    { id: 24, name_en: 'Having high expectations for performance', score: 80, is_declarative: false },
    { id: 25, name_en: 'Being results oriented', score: 85, is_declarative: false },
    { id: 26, name_en: 'High pay for good performance', score: 35, is_declarative: true },
    { id: 27, name_en: 'An emphasis on quality', score: 90, is_declarative: false },
    { id: 28, name_en: 'Being analytical', score: 85, is_declarative: false },
    { id: 29, name_en: 'Paying attention to detail', score: 90, is_declarative: false },
    { id: 30, name_en: 'Being precise', score: 85, is_declarative: false },
    { id: 31, name_en: 'Being highly organized', score: 95, is_declarative: false },
    { id: 32, name_en: 'Being team oriented', score: 80, is_declarative: false },
    { id: 33, name_en: 'Sharing information freely', score: 90, is_declarative: false },
    { id: 34, name_en: 'Working in collaboration with others', score: 75, is_declarative: false },
    { id: 35, name_en: 'Developing friends at work', score: 50, is_declarative: true },
    { id: 36, name_en: 'Fitting in', score: 70, is_declarative: false },
    { id: 37, name_en: 'Being competitive', score: 40, is_declarative: true },
    { id: 38, name_en: 'Being aggressive', score: 30, is_declarative: false },
    { id: 39, name_en: 'Decisiveness', score: 70, is_declarative: false },
    { id: 40, name_en: 'Taking initiative', score: 80, is_declarative: false },
    { id: 41, name_en: 'Taking individual responsibility', score: 90, is_declarative: false },
    { id: 42, name_en: 'Confronting conflict directly', score: 80, is_declarative: false },
    { id: 43, name_en: 'Working long hours', score: 40, is_declarative: false },
    { id: 44, name_en: 'Being reflective', score: 80, is_declarative: false },
    { id: 45, name_en: 'Autonomy', score: 75, is_declarative: false },
    { id: 46, name_en: 'Emphasizing a single culture', score: 90, is_declarative: false },
    { id: 47, name_en: 'Informality', score: 20, is_declarative: false },
    { id: 48, name_en: 'Being easy going', score: 30, is_declarative: false },
    { id: 49, name_en: 'Being calm', score: 60, is_declarative: false },
    { id: 50, name_en: 'Enthusiasm for the job', score: 55, is_declarative: true },
    { id: 51, name_en: 'Being distinctive', score: 85, is_declarative: false },
    { id: 52, name_en: 'Having a good reputation', score: 65, is_declarative: true },
    { id: 53, name_en: 'Being socially responsible', score: 45, is_declarative: true },
    { id: 54, name_en: 'Having a clear guiding philosophy', score: 95, is_declarative: false },
  ],
  risks_and_weaknesses: [
    {
      risk_title: 'Бюрократическое истощение и потеря фокуса на сути',
      severity: 'Critical',
      description:
        "Сверхжесткие рамки Холакратии (запрет отвечать на встречах, тотальная фиксация доменов) и сложный тайм-трекинг могут привести к тому, что сотрудники будут фокусироваться на 'соблюдении Конституции', а не на реальной продуктивности и здравом смысле.",
    },
    {
      risk_title: 'Дегуманизация рабочего процесса',
      severity: 'High',
      description:
        "Отношение к сотрудникам исключительно как к 'ролям' и 'партнерам', а также подавление эмоциональных реакций регламентами, снижает уровень неформальной вовлеченности и лояльности бренду, повышая риск выгорания креативных кадров.",
    },
  ],
};

const outDir = new URL('../src/data/', import.meta.url);
mkdirSync(outDir, { recursive: true });
writeFileSync(new URL('inostudio.json', outDir), JSON.stringify(data, null, 2), 'utf8');
writeFileSync(new URL('../src/data.json', import.meta.url), JSON.stringify(data, null, 2), 'utf8');
console.log('inostudio.json written');
