const sqlite3 = require('sqlite3').verbose();
//const bcrypt = require('bcrypt');
const path = require('path');

// Set up the SQLite database file (adjust the path as needed)
const dbPath = path.join(__dirname, 'quizdb.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database.');
  }
});

db.serialize(() => {

    //QUIZ QUESTIONS
    db.run(`
        INSERT INTO questions (question_text, category_id, department) VALUES
          ('What is the safest way to lift a heavy object', 1, 'warehouse'),
          ('When lifting, how should the load be positioned', 1, 'warehouse'),
          ('Which of the following is an example of using mechanical aids for manual handling', 1, 'warehouse'),
          ('What should you do if the load is too heavy to lift alone', 1, 'warehouse'),
          ('What is a sign that a lifting technique may be unsafe', 1, 'warehouse'),
          ('What is one of the most important considerations when lifting a heavy object', 1, 'warehouse'),
          ('Which of the following can help reduce the risk of injury when lifting heavy items', 1, 'warehouse'),
          ('What should you do before lifting a heavy load', 1, 'warehouse'),
          ('Which of the following is true regarding lifting heavy loads', 1, 'warehouse'),
          ('What is a Key Benefit of using a lifting aid like a trolley', 1, 'warehouse'),
          ('What is the risk of falling from any height', 1, 'warehouse'),
          ('When using a ladder, what is the safest practice', 1, 'warehouse'),
          ('When working on a scaffold, what safety measure is essential', 1, 'warehouse'),
          ('What should you do before working at height', 1, 'warehouse'),
          ('Which of the following should be avoided when working at height', 1, 'warehouse'),
          ('What is a Key Safety Feature of a ladder when working at height', 1, 'warehouse'),
          ('What should you always do before using scaffolding', 1, 'warehouse'),
          ('What is the purpose of guardrails when working at height', 1, 'warehouse'),
          ('What is the minimum requirement for fall protection when working at height above 6 feet', 1, 'warehouse'),
          ('Which of the following is a hazard when working at height', 1, 'warehouse'),
          ('What should you do if you notice a spill on the floor at work', 1, 'accounting'),
          ('Which of the following can increase the risk of accidents in the workplace', 1, 'accounting'),
          ('How can Personal Protective Equipment (PPE) help reduce workplace hazards', 1, 'accounting'),
          ('What should you do if you observe a safety hazard that could harm others', 1, 'accounting'),
          ('What is the risk of taking shortcuts at work', 1, 'accounting'),
          ('What is the main risk of having poor housekeeping in the workplace', 1, 'accounting'),
          ('Why is it important to check your surroundings before operating machinery', 1, 'accounting'),
          ('How can poor ergonomics affect your health in the workplace', 1, 'accounting'),
          ('What is an example of a fire hazard in a workplace', 1, 'warehouse'),
          ('What is the best way to identify potential hazards in your workplace', 1, 'accounting'),
          ('What is considered an unsafe act when using machinery', 1, 'accounting'),
          ('What is the risk of engaging in horseplay at the workplace', 1, 'accounting'),
          ('Why is it unsafe to ignore safety protocols', 1, 'accounting'),
          ('What is the danger of not wearing Personal Protective Equipment (PPE)', 1, 'accounting'),
          ('What should you do if you observe an unsafe act in the workplace', 1, 'accounting'),
          ('What is the risk of taking shortcuts in a dangerous task', 1, 'accounting'),
          ('What is considered unsafe when working with hazardous chemicals', 1, 'accounting'),
          ('Why is it unsafe to use damaged equipment', 1, 'accounting'),
          ('What is the danger of lifting heavy objects improperly', 1, 'accounting'),
          ('What is the consequence of working without proper lighting', 1, 'accounting'),
          ('What is the risk of ignoring designated smoking areas', 1, 'accounting'),
          ('What should you do if you see a coworker eating or drinking around sensitive equipment', 1, 'accounting'),
          ('Why is it unsafe to eat at your workstation, especially around computers and paperwork', 1, 'accounting'),
          ('Why is it unsafe to block fire exits with office furniture or equipment', 1, 'accounting'),
          ('Why is using a mobile phone while walking through the office considered unsafe', 1, 'accounting'),
          ('What is the risk of using the same password for multiple accounts', 1, 'accounting'),
          ('What should you do if you receive a suspicious email asking for sensitive information', 1, 'accounting'),
          ('Why is it unsafe to connect to public Wi-Fi networks', 1, 'accounting'),
          ('What should you do if you suspect your work computer has been infected with malware', 1, 'accounting'),
          ('What is the risk of using weak or easily guessable passwords', 1, 'accounting'),
          ('Why is it unsafe to download files from untrusted sources, even if the website looks legitimate', 1, 'accounting'),
          ('What is the potential risk of sharing your work login credentials with a colleague for convenience', 1, 'accounting'),
          ('Why should you be cautious about what you post on social media, especially regarding your workplace', 1, 'accounting'),
          ('Why is it risky to use the "Remember Me" feature for your work login on public or shared computers', 1, 'accounting'),
          ('Why should you be cautious about clicking on pop-up ads, even if they appear on legitimate websites', 1, 'accounting')
        `);
  
        // timeATTAck QUESTIONS INSERT, YES NO
    db.run(`
        INSERT INTO questions (question_text, category_id, department) VALUES
        ('Is lifting with your back straight and knees bent the safest way to lift heavy objects', 2, 'warehouse'),
        ('Is it okay to lift heavy items alone if you feel strong enough', 2, 'warehouse'),
        ('Does keeping a load close to your body while carrying reduce strain on your back', 2, 'warehouse'),
        ('Should you test the weight of an object before lifting it to determine if assistance is needed', 2, 'warehouse'),
        ('Can repetitive lifting and poor posture lead to long-term musculoskeletal injuries', 2, 'warehouse'),
        ('Is it safe to lift objects while twisting your body', 2, 'warehouse'),
        ('Is it okay to lift a load above shoulder height without assistance', 2, 'warehouse'),
        ('Is wearing gloves unnecessary when handling heavy materials', 2, 'warehouse'),
        ('Should you warm up and stretch before lifting objects', 2, 'warehouse'),
        ('Should proper footwear be worn to prevent slips and trips while lifting', 2, 'warehouse'),
        ('Are heavy loads safer to carry if held at arms length', 2, 'warehouse'),
        ('Should you maintain three points of contact when climbing a ladder', 2, 'warehouse'),
        ('Can falls from any height cause serious injury', 2, 'warehouse'),
        ('Should ladders always be inspected before use', 2, 'warehouse'),
        ('Is it safe to stand on the top step of a ladder', 2, 'warehouse'),
        ('Should scaffolding be checked regularly for stability', 2, 'warehouse'),
        ('Can strong winds increase the risk of falls when working at height', 2, 'warehouse'),
        ('Is fall protection only necessary when working above 6 feet', 2, 'warehouse'),
        ('Is it safe to carry heavy tools while climbing a ladder', 2, 'warehouse'),
        ('Can wet or oily surfaces increase slip hazards at height', 2, 'warehouse'),
        ('Can loose clothing increase the risk of entanglement when working at height', 2, 'warehouse'),
        ('Should you report damaged fall protection equipment immediately', 2, 'warehouse'),
        ('Is it safe to jump down from a height of less than 2 feet', 2, 'warehouse'),
        ('Are blocked Emergency Exits considered a safety hazard', 2, 'warehouse'),
        ('Should spills be cleaned up immediately', 2, 'warehouse'),
        ('Is wearing PPE (Personal Protective Equipment) optional if you are experienced', 2, 'warehouse'),
        ('Should cluttered work areas be cleaned regularly', 2, 'warehouse'),
        ('Should fire extinguishers be checked regularly', 2, 'warehouse'),
        ('Should hazards be reported even if no one is injured', 2, 'warehouse'),
        ('Should machine guards be removed if they slow down work', 2, 'warehouse'),
        ('Should workers assume all hazards are visible', 2, 'warehouse'),
        ('Is workplace safety only the responsibility of managers', 2, 'warehouse'),
        ('Should workers be trained in hazard recognition', 2, 'warehouse'),
        ('Taking shortcuts often lead to workplace accidents', 2, 'warehouse'),
        ('Is texting while walking through the office an unsafe act', 2, 'warehouse'),
        ('Can using personal mobile phones while driving for work purposes be dangerous', 2, 'warehouse'),
        ('Is it okay to ignore minor hazards if you are in a rush', 2, 'warehouse'),
        ('Is it safe to leave a computer powered on when you leave your desk', 2, 'warehouse'),
        ('Not following proper ergonomic guidelines lead to injuries over time', 2, 'warehouse'),
        ('Can overloading electrical outlets cause workplace fires', 2, 'warehouse'),
        ('Eating or drinking near equipment increase the risk of accidents', 2, 'warehouse'),
        ('Is it safe to ignore poor air quality in the office because it doesnt directly affect you', 2, 'warehouse'),
        ('Can overworking without regular breaks lead to mental and physical fatigue', 2, 'warehouse'),
        ('Is failing to lock out machinery before maintenance a serious safety violation', 2, 'warehouse'),
        ('Can ignoring a coworkers unsafe behavior contribute to accidents', 2, 'warehouse'),
        ('Is it acceptable to skip training if you feel confident in your ability to perform tasks safely', 2, 'warehouse'),
        ('Can weak passwords be easily guessed or cracked by hackers', 2, 'warehouse'),
        ('Is it safe to write down passwords and keep them under your keyboard for easy access', 2, 'warehouse'),
        ('Should employees store sensitive data on personal USB drives', 2, 'warehouse'),
        ('Can clicking on a suspicious link infect your device with malware', 2, 'warehouse'),
        ('Should employees avoid using public Wi-Fi when working remotely', 2, 'warehouse'),
        ('Is using a personal cloud storage service for company files a good practice', 2, 'warehouse'),
        ('Can webcam covers help prevent unauthorized access to your camera', 2, 'warehouse'),
        ('Should sensitive conversations be held in private spaces rather than public areas', 2, 'warehouse'),
        ('If you receive an unexpected email with an attachment, should you open it immediately', 2, 'warehouse'),
        ('Do scammers often pretend to be authority figures to gain trust', 2, 'warehouse'),
        ('Should you verify the identity of someone asking for sensitive information before responding', 2, 'warehouse'),
        ('Is it okay to leave Bluetooth and Wi-Fi on at all times, even when not in use', 2, 'warehouse'),
        ('Should employees avoid downloading work-related apps from unofficial app stores', 2, 'warehouse'),
        ('Is it safe to use the same password for multiple accounts to make it easier to remember', 2, 'warehouse'),
        ('Should you use long, complex passwords that include a mix of letters, numbers, and special characters', 2, 'warehouse'),
        ('Is it okay to share your password with coworkers if they need access to your account', 2, 'warehouse'),
        ('Is it important to regularly update your passwords for better security', 2, 'warehouse'),
        ('Is two-factor authentication (2FA) an optional extra layer of security for your accounts', 2, 'warehouse'),
        ('Is antivirus software only needed for computers, not mobile devices', 2, 'warehouse'),
        ('Can regular software updates help protect your devices from cyber threats', 2, 'warehouse')
        `);
  
  //image quiz questions
    db.run(`
        INSERT INTO questions (question_text, category_id, department) VALUES
        ('Which is the appropriate way to pick an Object from the Ground', 3, 'warehouse'),
        ('Which image shows the correct way to push a heavy object', 3, 'warehouse'),
        ('Which from the following is the appropriate footwear', 3, 'warehouse'),
        ('Which of the following image depicts the right way to carry Big Objects', 3, 'warehouse'),
        ('Which Image depicts the right way of working at height', 3, 'warehouse'),
        ('Proper way to stand on a Ladder', 3, 'warehouse'),
        ('Proper Way to Clean Chemical Spills on the Floor', 3, 'warehouse'),
        ('Which Image depicts the safest way to stand on a ladder', 3, 'warehouse'),
        ('Proper Safety Equipment', 3, 'warehouse'),
        ('Proper way to Extinguish Fire', 3, 'warehouse'),
        ('Which image shows a workplace with a safety hazard', 3, 'warehouse'),
        ('Which image shows a well-maintained workspace', 3, 'warehouse'),
        ('Which image shows proper fire safety measures', 3, 'warehouse'),
        ('Which image shows unsafe machine use', 3, 'warehouse'),
        ('Which image shows poor safety procedures', 3, 'warehouse'),
        ('Which image indicates a potential fire risk', 3, 'warehouse'),
        ('Which image indicates a potential accident to occur', 3, 'warehouse'),
        ('Which image shows a proper way to store hazardous materials', 3, 'warehouse'),
        ('Which image shows a safe smoking area', 3, 'warehouse'),
        ('Which image shows proper cable management at a workstation', 3, 'warehouse'),
        ('Which image shows a strong password', 3, 'warehouse'),
        ('Which image shows the safest way to handle suspicious emails', 3, 'warehouse'),
        ('Which image shows safe web browsing practices', 3, 'warehouse'),
        ('Which image shows a secure way to store passwords', 3, 'warehouse'),
        ('Which image shows the safest way to enter a password', 3, 'warehouse'),
        ('Which image depicts a fraudulent technical support scam', 3, 'warehouse'),
        ('Which image demonstrates a secure method for handling external USB devices', 3, 'warehouse'),
        ('Which image illustrates the correct use of Two-Factor Authentication (2FA)', 3, 'warehouse'),
        ('Which image represents an email attempting to impersonate a legitimate company', 3, 'warehouse'),
        ('Which image demonstrates the correct procedure for securing your workstation when leaving', 3, 'warehouse')
        `);


        // answers for: HANDLING -- HEIGHT--PERCEPTION--UNSAFE ACTS-- CYBER SEC
    db.run(`
        INSERT INTO answers (question_id, answer_text, is_correct) VALUES
        (1, 'Twist your back while lifting', 0),
        (1, 'Lift with your back straight and knees bent', 1),
        (1, 'Lift with your knees straight and back bent', 0),
        (1, 'Lift quickly to reduce strain', 0),
        (2, 'Keep the load away from your body to prevent strain', 0),
        (2, 'Keep the load close to your body to reduce strain', 1),
        (2, 'Hold the load as far away from your body as possible', 0),
        (2, 'Keep the load at eye level', 0),
        (3, 'Lifting the load with your hands only', 0),
        (3, 'Using a forklift or trolley to carry the load', 1),
        (3, 'Carrying the load on your back', 0),
        (3, 'Lifting with your legs only', 0),
        (4, 'Attempt to lift it alone and take frequent breaks', 0),
        (4, 'Ask a coworker for help or use mechanical aids', 1),
        (4, 'Wait for someone else to lift it for you', 0),
        (4, 'Lift it slowly and cautiously without asking for help', 0),
        (5, 'You feel no strain or discomfort while lifting', 0),
        (5, 'The load is within your bodys capability to lift', 0),
        (5, 'You experience back or shoulder strain when lifting', 1),
        (5, 'You are able to lift the load quickly without any effort', 0),
        (6, 'Lifting quickly to reduce time spent', 0),
        (6, 'Lifting while standing on one foot for balance', 0),
        (6, 'Make sure your feet are shoulder-width apart for stability', 1),
        (6, 'Lifting with one hand while carrying other items in the other hand', 0),
        (7, 'Lifting quickly to reduce time spent lifting', 0),
        (7, 'Wearing proper footwear and using lifting aids', 1),
        (7, 'Lifting with one hand to balance your body', 0),
        (7, 'Stretching after the lift to relax muscles', 0),
        (8, 'Plan the lift, ensure a clear path, and make sure your grip is secure', 1),
        (8, 'Lift the object immediately without checking your surroundings', 0),
        (8, 'Attempt the lift with minimal preparation', 0),
        (8, 'Make sure the load is as heavy as possible for maximum strength', 0),
        (9, 'You should always twist your body while lifting', 0),
        (9, 'It is safer to keep the load in front of your body rather than to one side', 1),
        (9, 'You should stretch first but can skip warming up', 0),
        (9, 'You can use your back and legs equally to lift', 0),
        (10, 'It reduces the physical strain on your body', 1),
        (10, 'It speeds up the lifting process', 0),
        (10, 'It makes the load heavier', 0),
        (10, 'It prevents you from needing to lift the load', 0),
        (11, 'Falls from only high places can cause injuries', 0),
        (11, 'A fall from any height can result in serious injury', 1),
        (11, 'Only falls from ladders are dangerous', 0),
        (11, 'Falls from low heights are not a risk', 0),
        (12, 'Always stand on the top rung', 0),
        (12, 'Ensure the ladder is secured and placed on a stable surface', 1),
        (12, 'Use a ladder with missing rungs as long as you are careful', 0),
        (12, 'Climb the ladder with both hands full', 0),
        (13, 'You do not need a harness if you have good balance', 0),
        (13, 'Wearing a safety harness is recommended', 1),
        (13, 'Only work on the scaffold if its less than 5 feet off the ground', 0),
        (13, 'A harness is not required for short jobs', 0),
        (14, 'Check the weather and ensure it is sunny', 0),
        (14, 'Secure tools and materials to prevent them from falling', 0),
        (14, 'Only check the ladder for stability, not the surface it is placed on', 0),
        (14, 'Wear any shoes you feel comfortable in', 0),
        (15, 'Standing on the top step of a ladder', 1),
        (15, 'Using a harness for extra safety', 0),
        (15, 'Ensuring tools are secured when climbing', 0),
        (15, 'Making sure the ground is clear of obstacles', 0),
        (16, 'It should be leaning at an angle of about 75 degrees', 1),
        (16, 'It should be placed at any angle you find comfortable', 0),
        (16, 'It should be at least 5 feet higher than the platform', 0),
        (16, 'You can use a ladder with broken or missing parts', 0),
        (17, 'Make sure the scaffolding is level and properly secured', 1),
        (17, 'Test the scaffolding by jumping up and down on it', 0),
        (17, 'Use the scaffolding even if it is missing safety rails', 0),
        (17, 'Set up the scaffolding without checking for any damage', 0),
        (18, 'They help you climb faster', 0),
        (18, 'They prevent tools from falling', 0),
        (18, 'They act as decorations', 0),
        (18, 'They provide a barrier to prevent falls from the edge', 1),
        (19, 'Only a helmet is required', 0),
        (19, 'A safety harness or guardrails must be used', 1),
        (19, 'No protection is required as long as the worker is experienced', 0),
        (19, 'Workers can decide for themselves whether to use protection', 0),
        (20, 'Working with all tools secured', 0),
        (20, 'Having an unstable work platform', 1),
        (20, 'Wearing a safety harness', 0),
        (20, 'Using a properly secured ladder', 0),
        (21, 'Wait for someone else to notice and clean it up', 0),
        (21, 'Ignore it because it is not a major hazard', 0),
        (21, 'Immediately clean it up or report it to the proper authorities', 1),
        (21, 'Walk around it and continue working', 0),
        (22, 'Proper lighting and clear signage', 0),
        (22, 'Cluttered walkways or poorly lit areas', 1),
        (22, 'Well-organized and tidy workstations', 0),
        (23, 'PPE makes work easier but does not reduce hazards', 0),
        (23, 'PPE helps protect you from exposure to dangerous substances and accidents', 1),
        (23, 'PPE is only necessary for heavy machinery operators', 0),
        (23, 'PPE is unnecessary if you are careful enough', 0),
        (24, 'Keep it to yourself and assume someone else will handle it', 0),
        (24, 'Immediately report it to a supervisor or safety officer', 1),
        (24, 'Ignore it if it does not directly affect you', 0),
        (24, 'Wait until the end of your shift to address it', 0),
        (25, 'It can make your work faster without any risk', 0),
        (25, 'It can lead to mistakes, accidents, and injuries', 1),
        (25, 'Shortcuts are only unsafe if they are noticed', 0),
        (25, 'Shortcuts save time but do not affect safety', 0),
        (26, 'It makes the workplace look untidy but does not pose any serious risks', 0),
        (26, 'It can lead to slips, trips, and falls, and increase the risk of fire', 1),
        (26, 'It prevents employees from finding tools and equipment quickly', 0),
        (26, 'It only affects the aesthetic of the workspace', 0),
        (27, 'To ensure the machinery is clean', 0),
        (27, 'To ensure there are no hazards or obstacles that could cause injury', 1),
        (27, 'To increase the speed of the task', 0),
        (27, 'To reduce the amount of training needed', 0),
        (28, 'It can cause fatigue and discomfort but will not lead to serious injuries', 0),
        (28, 'It can lead to Chronic Musculoskeletal Disorders like back and wrist pain', 1),
        (28, 'It has no impact on health if you are careful', 0),
        (28, 'It only affects workers who are lifting heavy objects', 0),
        (29, 'Poor ventilation that causes discomfort', 0),
        (29, 'Faulty wiring or overloaded electrical outlets', 1),
        (29, 'Properly stored flammable materials', 0),
        (29, 'Properly functioning fire extinguishers', 0),
        (30, 'Rely on others to spot hazards', 0),
        (30, 'Perform a regular safety inspection and be alert to changing conditions', 1),
        (30, 'Wait until an accident happens before taking action', 0),
        (30, 'Assume all hazards are obvious and do not need attention', 0),
        (31, 'Operating machinery without proper training', 1),
        (31, 'Checking the machinery before use', 0),
        (31, 'Wearing required PPE', 0),
        (31, 'Following the operating manual', 0),
        (32, 'It can increase teamwork', 0),
        (32, 'It can lead to distractions and serious injuries', 1),
        (32, 'It makes the work environment more enjoyable', 0),
        (32, 'It helps relieve stress', 0),
        (33, 'Ignoring safety protocols can improve efficiency', 0),
        (33, 'It increases the risk of accidents, injuries, and damage to equipment', 1),
        (33, 'Safety protocols are unnecessary when you are experienced', 0),
        (33, 'It helps you finish the task faster', 0),
        (34, 'PPE is uncomfortable, but it is okay to skip it sometimes', 0),
        (34, 'It increases the risk of injury or exposure to hazardous materials', 1),
        (34, 'PPE is not necessary if you feel safe', 0),
        (34, 'It has no real impact on safety', 0),
        (35, 'Ignore it, as it does not directly affect you', 0),
        (35, 'Report it to a supervisor or safety officer', 1),
        (35, 'Wait until the end of the shift to report it', 0),
        (35, 'Join in if the task looks easier or faster', 0),
        (36, 'Shortcuts make the task easier and faster without any risk', 0),
        (36, 'Shortcuts can lead to mistakes, accidents, and injuries', 1),
        (36, 'Taking shortcuts only increases productivity', 0),
        (36, 'Shortcuts are safe as long as you are careful', 0),
        (37, 'Wearing the correct PPE', 0),
        (37, 'Not properly labeling or storing chemicals', 1),
        (37, 'Following the Safety Data Sheet (SDS) Instructions', 0),
        (37, 'Using chemicals in a well-ventilated area', 0),
        (38, 'It is less productive but still works fine', 0),
        (38, 'Damaged equipment can lead to malfunctions, accidents, or injuries', 1),
        (38, 'It will fix itself if left alone', 0),
        (38, 'It is only unsafe if you are not careful', 0),
        (39, 'It can lead to injury, especially to your back', 1),
        (39, 'It is faster and saves time', 0),
        (39, 'It does not matter as long as you do not feel pain', 0),
        (39, 'It has no risk if you are strong enough', 0),
        (40, 'It makes the work environment more relaxed', 0),
        (40, 'It saves energy', 0),
        (40, 'It has no effect on safety', 0),
        (40, 'It can lead to accidents or mistakes due to poor visibility', 1),
        (41, 'Smoking in unauthorized areas can harm the health of others and violate workplace policies', 1),
        (41, 'It helps keep the workplace smelling fresh', 0),
        (41, 'It allows for a more private smoking area', 0),
        (41, 'Smoking in non-designated areas helps you focus better', 0),
        (42, 'Ignore it, as it does not directly affect you', 0),
        (42, 'Tell the coworker to clean up after themselves', 0),
        (42, 'Report the behavior to a supervisor or safety officer', 1),
        (42, 'Join in and eat or drink around sensitive equipment too', 0),
        (43, 'It can lead to food spills that damage equipment or documents', 1),
        (43, 'It improves focus by keeping you energized', 0),
        (43, 'It allows you to multitask and be more productive', 0),
        (43, 'It is fine as long as you clean up afterward', 0),
        (44, 'It creates a more organized office space', 0),
        (44, 'It could delay evacuation during an emergency, putting lives at risk', 1),
        (44, 'It helps keep the office tidy', 0),
        (44, 'It improves the aesthetic of the workspace', 0),
        (45, 'It increases your productivity by multitasking', 0),
        (45, 'It can distract you from potential hazards or obstacles, leading to accidents', 1),
        (45, 'It helps you complete tasks more efficiently', 0),
        (45, 'It has no impact if you are just checking the time', 0),
        (46, 'If one account is hacked, all your accounts are vulnerable', 1),
        (46, 'It simplifies remembering passwords', 0),
        (46, 'It does not pose any risk if the password is strong', 0),
        (46, 'It makes it easier to manage your accounts', 0),
        (47, 'Reply with the requested information', 0),
        (47, 'Click on any links in the email to verify the sender', 0),
        (47, 'Ignore the email and continue working', 0),
        (47, 'Delete the email and report it to IT', 1),
        (48, 'It is perfectly safe if you trust the network provider', 0),
        (48, 'Hackers can easily intercept and access your data on unsecured public networks', 1),
        (48, 'Public Wi-Fi speeds up your internet connection', 0),
        (48, 'Public Wi-Fi is secure as long as you use a password', 0),
        (49, 'Report it to your IT department immediately', 1),
        (49, 'Try to fix it yourself by downloading an antivirus tool', 0),
        (49, 'Restart the computer to see if the issue resolves', 0),
        (49, 'Ignore it and continue working', 0),
        (50, 'It makes your accounts vulnerable to being hacked', 1),
        (50, 'It makes your accounts more accessible and easier to manage', 0),
        (50, 'It does not affect security if your other protections are strong', 0),
        (50, 'It has no impact if you change your password regularly', 0),
        (51, 'Files from unknown sources may contain malware or ransomware', 1),
        (51, 'All files from the internet are automatically scanned for viruses', 0),
        (51, 'You can delete the files later if you suspect they are unsafe', 0),
        (51, 'Files from reputable sites are safe, so there is no need for concern', 0),
        (52, 'It allows for more efficient collaboration', 0),
        (52, 'Your personal information may be exposed if they mishandle it', 1),
        (52, 'It doesn not pose a risk as long as you trust the colleague', 0),
        (52, 'It ensures that someone else can step in when you are unavailable', 0),
        (53, 'Social media is an excellent platform for sharing workplace achievements', 0),
        (53, 'Sharing too much can make you a target for phishing or social engineering attacks', 1),
        (53, 'It has no impact on your personal security as long as your account is private', 0),
        (53, 'Posting about your workplace increases your professional network', 0),
        (54, 'It helps you save time by not needing to enter your password each time', 0),
        (54, 'It makes it easier for cybercriminals to access your accounts if the device is compromised', 1),
        (54, 'Public computers are automatically secure, so it is safe to use this feature', 0),
        (54, 'It does not pose any risk if you log out after use', 0),
        (55, 'Pop-ups are often disguised as legitimate notifications, tricking you into downloading malware', 1),
        (55, 'They are always sponsored by the website, so they are safe', 0),
        (55, 'They help improve the websites user experience', 0),
        (55, 'They typically lead to exciting discounts or exclusive offers', 0)
        `);
  
  
  
    // ANSWERS FOR TIME ATTACK
    db.run(`
        INSERT INTO answers (question_id, answer_text, is_correct) VALUES
        (56, 'yes', 1),
        (56, 'no', 0),
        (57, 'yes', 0),
        (57, 'no', 1),
        (58, 'yes', 1),
        (58, 'no', 0),
        (59, 'yes', 1),
        (59, 'no', 0),
        (60, 'yes', 1),
        (60, 'no', 0),
        (61, 'yes', 0),
        (61, 'no', 1),
        (62, 'yes', 0),
        (62, 'no', 1),
        (63, 'yes', 0),
        (63, 'no', 1),
        (64, 'yes', 1),
        (64, 'no', 0),
        (65, 'yes', 1),
        (65, 'no', 0),
        (66, 'yes', 0),
        (66, 'no', 1),
        (67, 'yes', 1),
        (67, 'no', 0),
        (68, 'yes', 1),
        (68, 'no', 0),
        (69, 'yes', 1),
        (69, 'no', 0),
        (70, 'yes', 0),
        (70, 'no', 1),
        (71, 'yes', 1),
        (71, 'no', 0),
        (72, 'yes', 1),
        (72, 'no', 0),
        (73, 'yes', 0),
        (73, 'no', 1),
        (74, 'yes', 0),
        (74, 'no', 1),
        (75, 'yes', 1),
        (75, 'no', 0),
        (76, 'yes', 1),
        (76, 'no', 0),
        (77, 'yes', 1),
        (77, 'no', 0),
        (78, 'yes', 0),
        (78, 'no', 1),
        (79, 'yes', 1),
        (79, 'no', 0),
        (80, 'yes', 1),
        (80, 'no', 0),
        (81, 'yes', 0),
        (81, 'no', 1),
        (82, 'yes', 1),
        (82, 'no', 0),
        (83, 'yes', 1),
        (83, 'no', 0),
        (84, 'yes', 1),
        (84, 'no', 0),
        (85, 'yes', 0),
        (85, 'no', 1),
        (86, 'yes', 0),
        (86, 'no', 1),
        (87, 'yes', 0),
        (87, 'no', 1),
        (88, 'yes', 1),
        (88, 'no', 0),
        (89, 'yes', 1),
        (89, 'no', 0),
        (90, 'yes', 1),
        (90, 'no', 0),
        (91, 'yes', 1),
        (91, 'no', 0),
        (92, 'yes', 0),
        (92, 'no', 1),
        (93, 'yes', 0),
        (93, 'no', 1),
        (94, 'yes', 1),
        (94, 'no', 0),
        (95, 'yes', 1),
        (95, 'no', 0),
        (96, 'yes', 1),
        (96, 'no', 0),
        (97, 'yes', 0),
        (97, 'no', 1),
        (98, 'yes', 1),
        (98, 'no', 0),
        (99, 'yes', 1),
        (99, 'no', 0),
        (100, 'yes', 1),
        (100, 'no', 0),
        (101, 'yes', 0),
        (101, 'no', 1),
        (102, 'yes', 1),
        (102, 'no', 0),
        (103, 'yes', 0),
        (103, 'no', 1),
        (104, 'yes', 0),
        (104, 'no', 1),
        (105, 'yes', 1),
        (105, 'no', 0),
        (106, 'yes', 1),
        (106, 'no', 0),
        (107, 'yes', 0),
        (107, 'no', 1),
        (108, 'yes', 1),
        (108, 'no', 0),
        (109, 'yes', 1),
        (109, 'no', 0),
        (110, 'yes', 0),
        (110, 'no', 1),
        (111, 'yes', 1),
        (111, 'no', 0),
        (112, 'yes', 1),
        (112, 'no', 0),
        (113, 'yes', 0),
        (113, 'no', 1),
        (114, 'yes', 1),
        (114, 'no', 0),
        (115, 'yes', 0),
        (115, 'no', 1),
        (116, 'yes', 1),
        (116, 'no', 0),
        (117, 'yes', 0),
        (117, 'no', 1),
        (118, 'yes', 1),
        (118, 'no', 0),
        (119, 'yes', 0),
        (119, 'no', 1),
        (120, 'yes', 0),
        (120, 'no', 1),
        (121, 'yes', 1),
        (121, 'no', 0)
  `);
  
  
  // answers for IMAGE QUIZ
  db.run(`
    INSERT INTO answers (question_id, image_url, is_correct) VALUES
    (122, '/images/manual_handling/1c.jpg', 1),
    (122, '/images/manual_handling/1w.jpg', 0),
    (123, '/images/manual_handling/2c.jpg', 1),
    (123, '/images/manual_handling/2w.jpg', 0),
    (124, '/images/manual_handling/3w.jpg', 0),
    (124, '/images/manual_handling/3c.jpg', 1),
    (125, '/images/manual_handling/4w.jpg', 0),
    (125, '/images/manual_handling/4c.jpg', 1),
    (126, '/images/manual_handling/5c.jpg', 1),
    (126, '/images/manual_handling/5w.jpg', 0),
    (127, '/images/manual_handling/6c.jpg', 1),
    (127, '/images/manual_handling/6w.jpg', 0),
    (128, '/images/manual_handling/7w.jpg', 0),
    (128, '/images/manual_handling/7c.jpg', 1),
    (129, '/images/manual_handling/8c.jpg', 1),
    (129, '/images/manual_handling/8w.jpg', 0),
    (130, '/images/manual_handling/9w.jpg', 0),
    (130, '/images/manual_handling/9c.jpg', 1),
    (131, '/images/manual_handling/10c.jpg', 1),
    (131, '/images/manual_handling/10w.jpg', 0),
    (132, '/images/hazard_perception/1c.jpg', 1),
    (132, '/images/hazard_perception/1w.jpg', 0),
    (133, '/images/hazard_perception/2c.jpg', 1),
    (133, '/images/hazard_perception/2w.jpg', 0),
    (134, '/images/hazard_perception/3w.jpg', 0),
    (134, '/images/hazard_perception/3c.jpg', 1),
    (135, '/images/hazard_perception/4c.jpg', 1),
    (135, '/images/hazard_perception/4w.jpg', 0),
    (136, '/images/hazard_perception/5w.jpg', 0),
    (136, '/images/hazard_perception/5c.jpg', 1),
    (137, '/images/hazard_perception/6c.jpg', 1),
    (137, '/images/hazard_perception/6w.jpg', 0),
    (138, '/images/hazard_perception/7w.jpg', 0),
    (138, '/images/hazard_perception/7c.jpg', 1),
    (139, '/images/hazard_perception/8c.jpg', 1),
    (139, '/images/hazard_perception/8w.jpg', 0),
    (140, '/images/hazard_perception/9w.jpg', 0),
    (140, '/images/hazard_perception/9c.jpg', 1),
    (141, '/images/hazard_perception/10c.jpg', 1),
    (141, '/images/hazard_perception/10w.jpg', 0),
    (142, '/images/cyber_awareness/1c.jpg', 1),
    (142, '/images/cyber_awareness/1w.jpg', 0),
    (143, '/images/cyber_awareness/2w.jpg', 0),
    (143, '/images/cyber_awareness/2c.jpg', 1),
    (144, '/images/cyber_awareness/3c.jpg', 1),
    (144, '/images/cyber_awareness/3w.jpg', 0),
    (145, '/images/cyber_awareness/4w.jpg', 0),
    (145, '/images/cyber_awareness/4c.jpg', 1),
    (146, '/images/cyber_awareness/5c.jpg', 1),
    (146, '/images/cyber_awareness/5w.jpg', 0),
    (147, '/images/cyber_awareness/6c.jpg', 1),
    (147, '/images/cyber_awareness/6w.jpg', 0),
    (148, '/images/cyber_awareness/7c.jpg', 1),
    (148, '/images/cyber_awareness/7w.jpg', 0),
    (149, '/images/cyber_awareness/8w.jpg', 0),
    (149, '/images/cyber_awareness/8c.jpg', 1),
    (150, '/images/cyber_awareness/9c.jpg', 1),
    (150, '/images/cyber_awareness/9w.jpg', 0),
    (151, '/images/cyber_awareness/10c.jpg', 1),
    (151, '/images/cyber_awareness/10w.jpg', 0)
    `);




});





setTimeout(() => {
    db.close(err => {
      if (err) {
        console.error('Error closing database:', err);
      } else {
        console.log('Database connection closed.');
      }
    });
  }, 5000);