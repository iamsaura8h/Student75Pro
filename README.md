# 📘 **Attendance Calculator**

## 📚 **Overview**
The **Attendance Calculator** is a smart tool designed to help students maintain a minimum attendance of 75%, which is a common academic requirement for exam eligibility. This calculator empowers students to track their attendance, plan leaves strategically, and still meet the required attendance percentage.

With this tool, students can make informed decisions about when to take leaves and how many classes they must attend to remain compliant with academic rules.

---

## 🎯 **Purpose**
- **Primary Goal**: Enable students to maintain 75% attendance while still being able to focus on personal growth and skill-building activities.
- **Problem Addressed**: Many universities and colleges require a minimum of 75% attendance to be eligible to write exams. This tool ensures students stay on track while planning their leaves wisely.
- **Value Added**: Provides actionable insights into the number of leaves a student can take and the additional classes they need to attend to achieve 75% attendance.

---

## ✨ **Key Features**

### 📊 **Attendance Insights**
- **Current Attendance**: View the current percentage of attendance.
- **Projected Attendance**: See the attendance percentage if you attend all the remaining classes.
- **Impact of Additional Days**: Check how attending one more day impacts your overall attendance percentage.

### 🗓️ **Guidance for Leave Planning**
- **Additional Days Needed**: Find out how many more days you need to attend to achieve a 75% attendance rate.
- **Remaining Leaves**: Discover how many days you can skip while still maintaining 75% attendance.

### 🚀 **Interactive & Dynamic**
- Real-time updates as users input details.
- Simple and user-friendly interface with actionable insights.

### 💡 **Tailored Advice**
- Get specific advice based on your attendance status, like whether you need to attend extra days or if you have room to take leaves.

---

## ⚙️ **How It Works**

1. **Input Required**
   - **Total Days in the Semester**: The total number of working days in the semester (usually 90-100 days).
   - **Days Hosted by the College**: The number of days that have already been held.
   - **Days Attended**: The number of days you have attended so far.

2. **What It Calculates**
   - **Current Attendance**: Calculates your current attendance percentage.
   - **Additional Days Needed**: The number of additional days you must attend to reach 75%.
   - **Remaining Leaves**: The maximum number of leaves you can still take and maintain 75% attendance.
   - **Projected Attendance**: The percentage of attendance if you attend all remaining classes.
   - **Impact of Additional Days**: The change in attendance percentage if you attend one additional day.

3. **Actionable Insights**
   - If your attendance is below 75%, the app tells you how many extra days you need to attend.
   - If your attendance is above 75%, the app shows how many leaves you can take while still maintaining 75% attendance.
   
---

## 🧮 **Example Usage**
**Scenario**:
- **Total Days in Semester**: 100
- **Days Hosted by College**: 50
- **Days Attended**: 30

**Results**:
- **Current Attendance**: 60% (30/50 = 60%)
- **Additional Days Needed**: 10 more days (to achieve 75%)
- **Remaining Leaves**: 0 (since current attendance is below 75%)
- **Projected Attendance**: 80% (if you attend all remaining classes)
- **Impact of Additional Days**: Each additional day raises attendance by ~1.5%

**Advice**: Attend at least 10 more days to achieve 75% attendance. If all remaining classes are attended, the final attendance will be 80%.

---

## 💻 **Technology Stack**

- **Frontend**: React (functional components and hooks for interactivity)
- **Styling**: Tailwind CSS for responsive design and a clean, modern UI
- **Logic**: TypeScript for type safety and strong logic enforcement

---

## 🧩 **Core Components**

1. **Input Form**
   - Collects data from users about total days, hosted days, and attended days.

2. **Results Section**
   - Displays current performance, projections, and advice in a structured, user-friendly layout.

3. **Calculation Logic**
   - Calculates key metrics like current attendance, projected attendance, and actionable insights.

---

## 🚀 **How to Run**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/attendance-calculator.git
   cd attendance-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm start
   ```

4. **View the app in the browser**
   - Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📦 **Project Structure**
```
📦attendance-calculator
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📜AttendanceCalculator.tsx
 ┃ ┣ 📂styles
 ┃ ┣ 📜App.tsx
 ┃ ┗ 📜index.tsx
 ┣ 📜package.json
 ┗ 📜README.md
```

---

## 🚀 **Future Enhancements**
- **Skill Tracking**: Allow students to log the skills they are building during their leaves.
- **Calendar View**: Visualize attendance patterns on a calendar.
- **Mobile-Responsive Design**: Ensure smooth functionality on smartphones.
- **Notifications**: Remind students when attendance drops near the danger zone (below 75%).

---

## 🤝 **Contributing**
We welcome contributions from the community. Here’s how you can contribute:
1. Fork the repository.
2. Create a branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## 📜 **License**
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ❤️ **Acknowledgments**
- Thanks to all students who inspired the idea for this project.
- Special shoutout to every student who struggles to maintain 75% attendance while pursuing personal growth!

---

## 📞 **Contact**
If you have any questions, suggestions, or feedback, feel free to reach out!

Happy Learning! 🚀

