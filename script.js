const questions = [
    {
        question: "Maria is planning her monthly budget. She allocates her income as follows: 30% for rent, 20% for groceries, 15% for transportation, 10% for savings, and the remaining amount for entertainment and other expenses. If Maria's total monthly income is ₱40,000, how much does she allocate for entertainment and other expenses?",
        image: "", 
        options: [
            { text: "₱12,000", image: "" },
            { text: "₱10,000", image: "" },
            { text: "₱14,000", image: "" },
            { text: "₱16,000", image: "" }
        ],
        answer: 1
    },
    {
        question: "Jorge is creating a financial plan for his monthly expenses. He plans to allocate his income as follows: 25% for rent, 15% for utilities, 20% for groceries, 10% for transportation, 5% for entertainment, and the rest for savings. If Jorge's total monthly income is ₱50,000, how much will he allocate for savings?",
        image: "", 
        options: [
            { text: "₱7,500", image: "" },
            { text: "₱10,000", image: "" },
            { text: "₱12,500", image: "" },
            { text: "₱15,000", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following best describes what a 'rate' is?",
        image: "", 
        options: [
            { text: "The total distance traveled by an object", image: "" },
            { text: "The amount of time it takes to complete a task", image: "" },
            { text: "A ratio that compares two different quantities, often involving time", image: "" },
            { text: "The maximum speed an object can reach", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following scenarios involves a rate?",
        image: "", 
        options: [
            { text: "A car has a fuel tank capacity of 50 liters.", image: "" },
            { text: "A sprinter runs 100 meters in 10 seconds.", image: "" },
            { text: "A building is 100 meters tall.", image: "" },
            { text: "A group of people bought 20 tickets for a concert.", image: "" }
        ],
        answer: 1
    },
    {
        question: "A car travels 180 kilometers in 3 hours. What is the average speed of the car in kilometers per hour?",
        image: "", 
        options: [
            { text: "30 km/h", image: "" },
            { text: "45 km/h", image: "" },
            { text: "60 km/h", image: "" },
            { text: "90 km/h", image: "" }
        ],
        answer: 2
    },
    {
        question: "A cyclist covers 120 kilometers in 5 hours. What is the average speed of the cyclist?",
        image: "", 
        options: [
            { text: "15 km/h", image: "" },
            { text: "20 km/h", image: "" },
            { text: "24 km/h", image: "" },
            { text: "30 km/h", image: "" }
        ],
        answer: 2
    },
    {
        question: "If a person runs 10 kilometers in 50 minutes, what is their average speed in kilometers per hour?",
        image: "", 
        options: [
            { text: "10 km/h", image: "" },
            { text: "11 km/h", image: "" },
            { text: "12 km/h", image: "" },
            { text: "13 km/h", image: "" }
        ],
        answer: 2
    },
    {
        question: "John is trying to understand two different types of rates for his monthly expenses. He has two options: Option 1: A subscription service charges ₱500 per month. Option 2: A different subscription service offers a yearly rate of ₱5,400. Which option is cheaper on a monthly basis, and how much does John save per month by choosing the cheaper option?",
        image: "", 
        options: [
            { text: "Option 1 is cheaper; saves ₱100 per month", image: "" },
            { text: "Option 2 is cheaper; saves ₱100 per month", image: "" },
            { text: "Option 1 is cheaper; saves ₱50 per month", image: "" },
            { text: "Option 2 is cheaper; saves ₱50 per month", image: "" }
        ],
        answer: 1
    },
    {
        question: "A heptagon has three pairs of congruent angles. The first pair measures 125° each, the second pair measures 150° each, and the third pair measures 130° each. What is the measure of the 7th angle?",
        image: "", 
        options: [
            { text: "30°", image: "" },
            { text: "50°", image: "" },
            { text: "80°", image: "" },
            { text: "90°", image: "" }
        ],
        answer: 3
    },
    {
        question: "What is 25% in decimal form?",
        image: "", 
        options: [
            { text: "0.25", image: "" },
            { text: "0.02", image: "" },
            { text: "0.0025", image: "" },
            { text: "0.002", image: "" }
        ],
        answer: 0
    },
    {
        question: "What is 50% in fraction form?",
        image: "", 
        options: [
            { text: "10/12", image: "" },
            { text: "5/8", image: "" },
            { text: "3/4", image: "" },
            { text: "1/2", image: "" }
        ],
        answer: 3
    },
    {
        question: "What is 0.06 in percent form?",
        image: "", 
        options: [
            { text: "60%", image: "" },
            { text: "6%", image: "" },
            { text: "30%", image: "" },
            { text: "3%", image: "" }
        ],
        answer: 1
    },
    {
        question: "What is 0.125 in percent form?",
        image: "", 
        options: [
            { text: "125%", image: "" },
            { text: "12.5%", image: "" },
            { text: "1.25%", image: "" },
            { text: "0.125%", image: "" }
        ],
        answer: 1
    },
    {
        question: "It is an interest paid only on the original amount of money called the principal.",
        image: "", 
        options: [
            { text: "Discount", image: "" },
            { text: "Commission", image: "" },
            { text: "Simple interest", image: "" },
            { text: "Rate", image: "" }
        ],
        answer: 2
    },
    {
        question: "A decrease in the original price of an item is called __________.",
        image: "", 
        options: [
            { text: "Rate", image: "" },
            { text: "Percentage", image: "" },
            { text: "Discount", image: "" },
            { text: "Principal", image: "" }
        ],
        answer: 2
    },
    {
        question: "A pair of shoes originally costs ₱3,200. During a sale, they are offered at a 20% discount. The sale price of the shoes is ₱2,560. What is the rate offered during the sale?",
        image: "", 
        options: [
            { text: "20%", image: "" },
            { text: "30%", image: "" },
            { text: "40%", image: "" },
            { text: "50%", image: "" }
        ],
        answer: 0
    },
    {
        question: "A real estate agent earns a 15% commission on a house that sells for ₱250,000. How much commission does the agent earn?",
        image: "", 
        options: [
            { text: "₱37,500", image: "" },
            { text: "₱38,000", image: "" },
            { text: "₱38,500", image: "" },
            { text: "₱39,000", image: "" }
        ],
        answer: 0
    },
     {
        question: "In geometry, constructions are a crucial part of the subject. They involve using a compass, straightedge, and pencil to create precise shapes and figures. By combining angles, measurements, and careful drawing, we can create a wide range of geometric forms. In this problem, we are given a picture that shows a construction in progress. Our task is to determine what is being constructed.",
        image: "", 
        options: [
            { text: "A circle with an inscribed polygon", image: "" },
            { text: "A circle with an inscribed regular polygon", image: "" },
            { text: "A circle with a tangent line", image: "" },
            { text: "A circle with an arc", image: "" }
        ],
        answer: 1
    },
    {
        question: "Two angles are said to be supplementary when the sum of their measures is equal to?",
        image: "", 
        options: [
            { text: "45 degrees", image: "" },
            { text: "90 degrees", image: "" },
            { text: "180 degrees", image: "" },
            { text: "360 degrees", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which describes a linear pair?",
        image: "", 
        options: [
            { text: "two adjacent angles", image: "" },
            { text: "two adjacent angles and vertical angles", image: "" },
            { text: "two adjacent angles and supplementary angles", image: "" },
            { text: "two adjacent angles and complementary angles", image: "" }
        ],
        answer: 2
    },
    {
        question: "Polygons are categorized according to the sizes of their interior angles. When all angles of a polygon are less than 180 degrees, it is called?",
        image: "", 
        options: [
            { text: "Convex", image: "" },
            { text: "Nonconvex", image: "" },
            { text: "Regular", image: "" },
            { text: "Irregular", image: "" }
        ],
        answer: 0
    },
    {
        question: "What is the name of a regular polygon with all sides equal?",
        image: "", 
        options: [
            { text: "Convex polygon", image: "" },
            { text: "Non-Convex polygon", image: "" },
            { text: "Regular polygon", image: "" },
            { text: "Irregular polygon", image: "" }
        ],
        answer: 2
    },
    {
        question: "In geometry, the sum of the interior angles of a polygon is given by the formula (n-2) × 180 degrees, where n is the number of sides of the polygon. Find the sum of the interior angles in a 7-gon.",
        image: "", 
        options: [
            { text: "720°", image: "" },
            { text: "900°", image: "" },
            { text: "1080°", image: "" },
            { text: "1260°", image: "" }
        ],
        answer: 1
    },
    {
        question: "Given, Plane ABCDEFG has 7 sides. What is the sum of the interior angles of the given figure?",
        image: "", 
        options: [
            { text: "720°", image: "" },
            { text: "900°", image: "" },
            { text: "1080°", image: "" },
            { text: "1260°", image: "" }
        ],
        answer: 3
    },
    {
        question: "Rommel wants to build a rectangular garden in his backyard. He needs to know how much fencing he will need to buy if his garden measures 5m by 8m. What is the perimeter of the garden?",
        image: "", 
        options: [
            { text: "3m", image: "" },
            { text: "13m", image: "" },
            { text: "26m", image: "" },
            { text: "40m", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which polygon has five sides?",
        image: "", 
        options: [
            { text: "Heptagon", image: "" },
            { text: "Hexagon", image: "" },
            { text: "Pentagon", image: "" },
            { text: "Quadrilateral", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following is NOT a polygon?",
        image: "", 
        options: [
            { text: "A", image: "" },
            { text: "B", image: "" },
            { text: "C", image: "" },
            { text: "D", image: "" }
        ],
        answer: 2
    },
    {
        question: "What is the sum of the measures of the interior angles of a triangle?",
        image: "", 
        options: [
            { text: "180 degrees", image: "" },
            { text: "120 degrees", image: "" },
            { text: "90 degrees", image: "" },
            { text: "45 degrees", image: "" }
        ],
        answer: 0
    },
    {
        question: "A triangle has angles measuring 40, 40, and 70 degrees. What type of triangle is this?",
        image: "", 
        options: [
            { text: "Right triangle", image: "" },
            { text: "Isosceles triangle", image: "" },
            { text: "Equilateral triangle", image: "" },
            { text: "Scalene triangle", image: "" }
        ],
        answer: 1
    },
    {
        question: "Two angles are supplementary when their sum is equal to?",
        image: "", 
        options: [
            { text: "45 degrees", image: "" },
            { text: "90 degrees", image: "" },
            { text: "180 degrees", image: "" },
            { text: "360 degrees", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following sampling techniques involves selecting every nth person from a list?",
        image: "", // Image for the question
        options: [
            { text: "Convenience sampling", image: "" },
            { text: "Simple random sampling", image: "" },
            { text: "Systematic sampling", image: "" },
            { text: "Stratified sampling", image: "" }
        ],
        answer: 2 // Index of the correct option
    },
    {
        question: "Which of the following is the primary difference between random sampling and stratified sampling?",
        image: "",
        options: [
            { text: "Random sampling involves selecting participants based on their availability, while stratified sampling divides the population into groups before selecting participants.", image: "" },
            { text: "Random sampling gives every individual in the population an equal chance of being selected, while stratified sampling selects participants from different subgroups based on certain characteristics.", image: "" },
            { text: "Random sampling is used for quantitative data, while stratified sampling is used for qualitative data.", image: "" },
            { text: "Random sampling is used for small populations, while stratified sampling is used for large populations.", image: "" }
        ],
        answer: 1
    },
    {
        question: "What is the purpose of a frequency distribution table?",
        image: "",
        options: [
            { text: "To organize data and show how often each value occurs.", image: "" },
            { text: "To calculate the mean of the data.", image: "" },
            { text: "To find the range of the data.", image: "" },
            { text: "To list all data values in ascending order.", image: "" }
        ],
        answer: 0
    },
    {
        question: "In a frequency distribution table, which of the following gives the number of scores that are included in a given class interval?",
        image: "",
        options: [
            { text: "Class frequency", image: "" },
            { text: "Class width", image: "" },
            { text: "Lower limit", image: "" },
            { text: "Upper limit", image: "" }
        ],
        answer: 0
    },
    {
        question: "The table above shows the number of books read by students in a class during the month of January. How many students are in the class in total?",
        image: "5.png",
        options: [
            { text: "15", image: "" },
            { text: "18", image: "" },
            { text: "20", image: "" },
            { text: "22", image: "" }
        ],
        answer: 3
    },
    {
        question: "The  frequency distribution table above shows the number of hours spent studying by students in a week. Based on the table, how many students studied for more than 6 hours in the week?",
        image: "6.png",
        options: [
            { text: "6", image: "" },
            { text: "8", image: "" },
            { text: "10", image: "" },
            { text: "16", image: "" }
        ],
        answer: 2
    },
    {
        question: "The following scores were obtained from a class of 10 students: 85, 90, 85, 78, 92, 78, 85, 90, 92, 78. Which of the following is the correct frequency distribution table for these scores?",
        image: "7.png",
        options: [
            { text: "", image: "7a.png" },
            { text: "", image: "7b.png" },
            { text: "", image: "7c.png" },
            { text: "", image: "7d.png" }
        ],
        answer: 0
    },
    {
        question: "Which of the following graphs is best used to show the percentage distribution of data?",
        image: "",
        options: [
            { text: "Line graph", image: "" },
            { text: "Pie graph", image: "" },
            { text: "Bar graph", image: "" },
            { text: "Stem-and-leaf plot", image: "" }
        ],
        answer: 1
    },
    {
        question: "What does the height of a bar represent in a bar graph?",
        image: "",
        options: [
            { text: "The frequency of the data", image: "" },
            { text: "The mean of the data", image: "" },
            { text: "The total number of data points", image: "" },
            { text: "The category of data", image: "" }
        ],
        answer: 0
    },
    {
        question: "You are given the following data of monthly sales for a store: January: 120 units, February: 150 units, March: 170 units. Which type of graph would be most appropriate to display the trend of sales over time?",
        image: "",
        options: [
            { text: "Pie graph", image: "" },
            { text: "Line graph", image: "" },
            { text: "Bar graph", image: "" },
            { text: "Stem-and-leaf plot", image: "" }
        ],
        answer: 1
    },
    {
        question: "A stem-and-leaf plot shows the following data for the test scores of 10 students:\n50 | 2, 6, 9\n60 | 1, 4, 8\n70 | 3, 5\nWhat is the median score?",
        image: "",
        options: [
            { text: "60", image: "" },
            { text: "61", image: "" },
            { text: "62", image: "" },
            { text: "65", image: "" }
        ],
        answer: 2
    },
    {
        question: "You are comparing two different types of data using graphs. A pie graph is used to show the composition of a whole, while a line graph shows changes over time. Which of the following statements best evaluates these graph choices?",
        image: "",
        options: [
            { text: "A pie graph should be used for continuous data, while a line graph should be used for categorical data.", image: "" },
            { text: "A pie graph is best for showing changes over time, while a line graph is used for comparing parts of a whole.", image: "" },
            { text: "A pie graph is appropriate for showing the composition of a whole, while a line graph is suitable for tracking changes over time.", image: "" },
            { text: "Both pie and line graphs can show the same types of data effectively.", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following statistical graphs is most suitable for comparing the frequency of different categories, such as the number of students in different grade levels?",
        image: "",
        options: [
            { text: "Line graph", image: "" },
            { text: "Pie graph", image: "" },
            { text: "Bar graph", image: "" },
            { text: "Histogram", image: "" }
        ],
        answer: 2
    },
    {
        question: "Based on the pie chart showing the distribution of a class’s favorite subjects (Math, Science, English, History), if 25% of the class chose Science, what fraction of the class preferred Science?",
        image: "",
        options: [
            { text: "1/5", image: "" },
            { text: "1/4", image: "" },
            { text: "1/3", image: "" },
            { text: "1/2", image: "" }
        ],
        answer: 1
    },
    {
        question: "The line graph above shows the number of visitors to a park over five months. Based on the data shown in the line graph, which of the following statements is true?",
        image: "15.png",
        options: [
            { text: "The number of visitors steadily increased each month.", image: "" },
            { text: "The highest number of visitors was recorded in March.", image: "" },
            { text: "The number of visitors decreased after April.", image: "" },
            { text: "There was a 50-visitor increase between February and March, and a 100-visitor increase between March and April.", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following correctly represents the set of integers?",
        image: "",
        options: [
            { text: "{-3, -2, -1,1, 2, 3}", image: "" },
            { text: "{1, 2, 3, 4, 5}", image: "" },
            { text: "{-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5}", image: "" },
            { text: "{-3.5, -2.5, -1.5, 0, 1.5, 2.5, 3.5}", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following is true about the set of integers?",
        image: "",
        options: [
            { text: "Integers include all positive numbers and all fractions.", image: "" },
            { text: "Integers include all positive whole numbers, zero, and all negative whole numbers.", image: "" },
            { text: "Integers are only whole numbers greater than zero.", image: "" },
            { text: "Integers include only whole numbers greater than zero and their opposites.", image: "" }
        ],
        answer: 1
    },
    {
        question: "In a mountain climbing scenario, if you are 100 meters above sea level, which number represents your position?",
        image: "",
        options: [
            { text: "-100", image: "" },
            { text: "0", image: "" },
            { text: "100", image: "" },
            { text: "200", image: "" }
        ],
        answer: 2
    },
    {
        question: "A car travels 50 km north, then 30 km south. What is its final position relative to the starting point?",
        image: "",
        options: [
            { text: "80 km south", image: "" },
            { text: "50 km north", image: "" },
            { text: "30 km north", image: "" },
            { text: "20 km north", image: "" }
        ],
        answer: 3
    },
    {
        question: "A hiker climbs 200 meters up a hill, then descends 150 meters. What is the total change in elevation for the hiker?",
        image: "",
        options: [
            { text: "350 meters", image: "" },
            { text: "200 meters", image: "" },
            { text: "50 meters down", image: "" },
            { text: "50 meters up", image: "" }
        ],
        answer: 3
    },
    {
        question: "If you are located at +3 on a number line, and you move 5 units to the left, where will you be?",
        image: "",
        options: [
            { text: "+2", image: "" },
            { text: "−2", image: "" },
            { text: "-5", image: "" },
            { text: "+5", image: "" }
        ],
        answer: 1
    },
    {
        question: "Which of the following is true about locating integers on a number line?",
        image: "",
        options: [
            { text: "Positive integers are always placed to the left of zero.", image: "" },
            { text: "Negative integers are always placed to the right of zero.", image: "" },
            { text: "Zero is placed at the center of the number line.", image: "" },
            { text: "The farther an integer is from zero, the smaller its absolute value.", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following is the correct order of the integers from least to greatest?",
        image: "",
        options: [
            { text: "-5, -2, 0, 3, 7", image: "" },
            { text: "-4, -5, -2, 0, 3", image: "" },
            { text: "-2, 0, -5, 3, 7", image: "" },
            { text: "0, -2, -5, 3, 7", image: "" }
        ],
        answer: 0
    },
    {
        question: "Which of the following comparisons is true?",
        image: "",
        options: [
            { text: "-8 > -4", image: "" },
            { text: "3 < 7", image: "" },
            { text: "-5 < -8", image: "" },
            { text: "0 < -2", image: "" }
        ],
        answer: 1
    },
    {
        question: "The following are the depths (in meters) of four submarines below sea level: Submarine X: -120 meters, Submarine Y: -90 meters, Submarine Z: -150 meters, Submarine W: -100 meters. Which of the following correctly arranges the submarines from the shallowest to the deepest?",
        image: "",
        options: [
            { text: "Submarine Y, Submarine W, Submarine X, Submarine Z", image: "" },
            { text: "Submarine Z, Submarine X, Submarine W, Submarine Y", image: "" },
            { text: "Submarine W, Submarine Y, Submarine X, Submarine Z", image: "" },
            { text: "Submarine Y, Submarine Z, Submarine W, Submarine X", image: "" }
        ],
        answer: 0
    },
    {
        question: "Which of the following is the result when you add -4 and 6 using a number line?",
        image: "",
        options: [
            { text: "-10", image: "" },
            { text: "-2", image: "" },
            { text: "2", image: "" },
            { text: "10", image: "" }
        ],
        answer: 2
    },
    {
        question: "If you are using counters and have 3 red counters (-3) and 5 yellow counters (+5), what is the total?",
        image: "",
        options: [
            { text: "8", image: "" },
            { text: "3", image: "" },
            { text: "2", image: "" },
            { text: "-8", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following bar models correctly represents the sum of -6 and +8?",
        image: "",
        options: [
            { text: "A bar of 8 red blocks and 6 green blocks.", image: "" },
            { text: "A bar of 6 yellow blocks and 8 red blocks.", image: "" },
            { text: "A bar of 8 green blocks and 6 red blocks.", image: "" },
            { text: "A bar of 8 yellow blocks and 6 green blocks.", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following integer operations is correctly solved using a concrete model?",
        image: "",
        options: [
            { text: "-5 + (-4) = -9", image: "" },
            { text: "5 - (-2) = 3", image: "" },
            { text: "-3 - (-7) = -4", image: "" },
            { text: "2 + (-3) = 5", image: "" }
        ],
        answer: 0
    },
    {
        question: "Create a pictorial model to represent the addition of -4 and +7. Which of the following diagrams is correct?",
        image: "",
        options: [
            { text: "A line with 4 red blocks and 7 green blocks.", image: "" },
            { text: "A line with 7 red blocks and 4 green blocks.", image: "" },
            { text: "A number line with -4 on the left and +7 on the right, crossing at 3.", image: "" },
            { text: "A bar with 7 red blocks and 4 yellow blocks.", image: "" }
        ],
        answer: 2
    }, 
    {
        question: "What is the product of −4×6?",
        image: "",
        options: [
            { text: "-24", image: "" },
            { text: "24", image: "" },
            { text: "10", image: "" },
            { text: "-10", image: "" }
        ],
        answer: 0
    },
    {
        question: "Which of the following rules is true when multiplying two integers with different signs?",
        image: "",
        options: [
            { text: "The product is always positive.", image: "" },
            { text: "The product is always negative.", image: "" },
            { text: "The product depends on the absolute values of the integers.", image: "" },
            { text: "The product is zero if any number is zero.", image: "" }
        ],
        answer: 1
    },
    {
        question: "Ella is organizing her photo collection. She has 96 photos, and she wants to place an equal number of photos into 6 photo albums. How many photos will go into each album?",
        image: "",
        options: [
            { text: "18", image: "" },
            { text: "16", image: "" },
            { text: "14", image: "" },
            { text: "12", image: "" }
        ],
        answer: 1
    },
    {
        question: "Simplify the expression 5×(−2)+8÷4. What is the result?",
        image: "",
        options: [
            { text: "-8", image: "" },
            { text: "-6", image: "" },
            { text: "6", image: "" },
            { text: "-10", image: "" }
        ],
        answer: 0
    },
    {
        question: "Which of the following expressions evaluates to 5?",
        image: "",
        options: [
            { text: "(2+3)×2÷2", image: "" },
            { text: "2×3+2÷2", image: "" },
            { text: "(2×3)+(2÷2)", image: "" },
            { text: "2×(3-2)÷2", image: "" }
        ],
        answer: 0
    },
    {
        question: "Which of the following expressions involves a correct application of GEMDAS?",
        image: "",
        options: [
            { text: "3+2×5÷2", image: "" },
            { text: "(3+2) × (5÷2)", image: "" },
            { text: "3+2×(5÷2)", image: "" },
            { text: "3× (2+5) ÷2", image: "" }
        ],
        answer: 2
    },
    {
        question: "Given the expression −6+8×3−4, which part of the order of operations would you evaluate first?",
        image: "",
        options: [
            { text: "Addition of -6 and 8", image: "" },
            { text: "Multiplication of 8 and 3", image: "" },
            { text: "Subtraction of 4", image: "" },
            { text: "Addition of 3 and 8", image: "" }
        ],
        answer: 1
    },
    {
        question: "Create a numerical expression involving integers, and solve it using GEMDAS. Choose the expression that simplifies to 12.",
        image: "",
        options: [
            { text: "4×3÷2+6", image: "" },
            { text: "(6+4)×2−2", image: "" },
            { text: "3×4+6÷3", image: "" },
            { text: "5×(3+2)−3", image: "" }
        ],
        answer: 0
    },
    {
        question: "What is the absolute value of -4 and what does it represent on the number line?",
        image: "",
        options: [
            { text: "4; it is 4 units to the right of zero", image: "" },
            { text: "4; it is 4 units above zero", image: "" },
            { text: "4; it is 4 units to the left of zero", image: "" },
            { text: "-4; it is 4 units to the right of zero", image: "" }
        ],
        answer: 0
    },
    {
        question: "Which of the following statements is true regarding the absolute value of numbers?",
        image: "",
        options: [
            { text: "The absolute value of a positive number is always greater than the absolute value of a negative number.", image: "" },
            { text: "The absolute value of a number is always the same as the number itself.", image: "" },
            { text: "The absolute value of a negative number is equal to its positive counterpart.", image: "" },
            { text: "The absolute value of zero is negative.", image: "" }
        ],
        answer: 2
    }
    
    
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const questionImg = document.getElementById('question-image');

    optionsEl.innerHTML = ''; // Clear previous options

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    // Set the question image if available
    if (currentQuestion.image) {
        questionImg.src = currentQuestion.image;
        questionImg.style.display = "block";
    } else {
        questionImg.style.display = "none";
    }

    // Loop through options and create elements
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option.text;
        li.onclick = () => checkAnswer(index);

        // Add option image if available
        if (option.image) {
            const img = document.createElement('img');
            img.src = option.image;
            img.alt = "Option Image";
            li.prepend(img);
        }

        optionsEl.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    // Update score
    if (selectedIndex === currentQuestion.answer) {
        score++;
    }
    document.getElementById('score').textContent = score;

    // Move to next question or show results
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz finished! Your final score is: ${score}`);
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }
}

// Load the first question when the page loads
window.onload = loadQuestion;
