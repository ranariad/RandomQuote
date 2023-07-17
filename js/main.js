
    var quoteDesc = document.getElementById("quoteDesc");
    var author = document.getElementById("authorName");
    var quoteBtn = document.getElementById("quoteBtn");
    var qoutes =[
        {
            quoteContent: "“عندما يكون لديك الشجاعة لمتابعة أحلامك فقد تحققها”",
            authorName: "― والت ديزني",
        },
        {
            quoteContent: "“بيت لا يذكر فيه اسم الله تعالى ... لا روح فيه”",
            authorName: "― ابراهيم الفقي",
        },
        {
            quoteContent: "“عاملوا الناس بما يُظهرون لكم، والله يتولّى مافي صدورهم ”",
            authorName: "― عمر بن الخطاب ",
        },
        {
            quoteContent: "“ ما ندمت على سكوتي مرة، لكنني ندمت على الكلام مرارا. ”",
            authorName: "― عمر بن الخطاب  ",
        },
        {
            quoteContent: "“ أحب الناس إلي من رفع إلي عيوبي ”",
            authorName: "― عمر بن الخطاب ",
        },
        {
            quoteContent: "“ لا تعبدوا الله ليعطي، بل اعبدوه ليرضى، فإن رضي أدهشكم بعطائه ”",
            authorName: "― محمد متولي الشعراوي ",
        },
        {
            quoteContent: "“ لا تقلق من تدابير البشر فأقصى ما يستطيعون هو تنفيذ إرادة الله  ”",
            authorName: "― محمد متولي الشعراوي ",
        },
        {
            quoteContent: "“ لا يقلق من كان له أب ، فكيف بمن كان له رب ”",
            authorName: "― محمد متولي الشعراوي  ",
        },
        {
            quoteContent: "“ ما كل ما يتمناه المرء يدركه ... تجري الرياح بما لا تشتهي السفن ”",
            authorName: "―  أبو الطيب المتنبي",
        },
        {
            quoteContent: "“  اكتساب المهارات يبدأ ببرمجة العقل بالخطوات الصحيحة ، ثم بالممارسة المتكررة   ”",
            authorName: "― آلبرت اينشتاين ",
        },
        {
            quoteContent: "“ لا توجد كلمة مستحيل الا في قاموس الضعفاء  ”",
            authorName: "― نابليون بونابرت ",
        },
        {
            quoteContent: "“ قد يتحول كل شي ضدك و يبقى الله معك ، فكن مع الله يكن كل شي معك  ”",
            authorName: "― صلاح الدين الايوبي ",
        },
        {
            quoteContent: "“ كل عسير اذا استعنت بالله فهو يسير   ”",
            authorName: "―  صلاح الدين الايوبي ",
        },
    ]

    var currentRandom;
    // gets random quotes without repetition
    function getRandomNumber() 
    {
        var randomNumber = Math.floor(Math.random() * qoutes.length);
        while (randomNumber === currentRandom) {
        randomNumber = Math.floor(Math.random() * qoutes.length);
        }
        currentRandom = randomNumber;
        return randomNumber;
    }
    // function to get random number and insert the quote of index equal 
    // to that number inside their corresponding HTML Element
    function getRandomQuotes() {
        var randomQuotes = qoutes[getRandomNumber()];
        quoteDesc.innerHTML = randomQuotes.quoteContent;
        author.innerHTML = randomQuotes.authorName;
    }