const People = require("../Models/UserModel");

const DietDataController = async(req,res)=>{
    try{
        
        const dietPlans = [
            {
              id: 0,
              name: "Diet Plan 1",
              days: [
                {
                  day: "Day 1",
                  breakfast: "Oatmeal with banana",
                  lunch: "Grilled chicken with brown rice",
                  dinner: "Baked salmon with quinoa",
                },
                {
                  day: "Day 2",
                  breakfast: "Greek yogurt with berries",
                  lunch: "Turkey and avocado wrap",
                  dinner: "Shrimp and vegetable stir-fry",
                },
                {
                  day: "Day 3",
                  breakfast: "Scrambled eggs with whole wheat toast",
                  lunch: "Chicken Caesar salad",
                  dinner: "Grilled steak with roasted vegetables",
                },
                {
                  day: "Day 4",
                  breakfast: "Avocado toast with poached eggs",
                  lunch: "Chicken and quinoa bowl",
                  dinner: "Baked chicken with sweet potato",
                },
                {
                  day: "Day 5",
                  breakfast: "Smoothie bowl with banana and almond milk",
                  lunch: "Grilled chicken with mixed greens salad",
                  dinner: "Shrimp and pasta with marinara sauce",
                },
                {
                  day: "Day 6",
                  breakfast: "Omelette with vegetables",
                  lunch: "Turkey and cheese sandwich",
                  dinner: "Grilled chicken with roasted broccoli",
                },
                {
                  day: "Day 7",
                  breakfast: "Breakfast burrito with scrambled eggs and sausage",
                  lunch: "Chicken quesadilla",
                  dinner: "Baked chicken with mashed potatoes",
                },
              ],
            },
            {
              id: 1,
              name: "Diet Plan 2",
              days: [
                {
                  day: "Day 1",
                  breakfast: "Avocado toast with scrambled eggs",
                  lunch: "Grilled chicken with mixed greens salad",
                  dinner: "Baked salmon with quinoa",
                },
                {
                  day: "Day 2",
                  breakfast: "Greek yogurt with berries",
                  lunch: "Turkey and avocado wrap",
                  dinner: "Shrimp and vegetable stir-fry",
                },
                {
                  day: "Day 3",
                  breakfast: "Smoothie bowl with banana and almond milk",
                  lunch: "Chicken Caesar salad",
                  dinner: "Grilled steak with roasted vegetables",
                },
                {
                  day: "Day 4",
                  breakfast: "Omelette with vegetables",
                  lunch: "Chicken and quinoa bowl",
                  dinner: "Baked chicken with sweet potato",
                },
                {
                  day: "Day 5",
                  breakfast: "Breakfast burrito with scrambled eggs and sausage",
                  lunch: "Turkey and cheese sandwich",
                  dinner: "Grilled chicken with roasted broccoli",
                },
                {
                  day: "Day 6",
                  breakfast: "Avocado toast with scrambled eggs",
                  lunch: "Grilled chicken with mixed greens salad",
                  dinner: "Baked salmon with quinoa",
                },
                {
                  day: "Day 7",
                  breakfast: "Greek yogurt with berries",
                  lunch: "Chicken quesadilla",
                  dinner: "Shrimp and vegetable stir-fry",
                },
              ],
            },
            {
              id: 2,
              name: "Diet Plan 3",
              days: [
                {
                  day: "Day 1",
                  breakfast: "Omelette with vegetables",
                  lunch: "Chicken and quinoa bowl",
                  dinner: "Baked chicken with sweet potato",
                },
                {
                  day: "Day 2",
                  breakfast: "Greek yogurt with berries",
                  lunch: "Turkey and avocado wrap",
                  dinner: "Grilled steak with roasted vegetables",
                },
                {
                  day: "Day 3",
                  breakfast: "Breakfast burrito with scrambled eggs and sausage",
                  lunch: "Chicken Caesar salad",
                  dinner: "Baked salmon with quinoa",
                },
                {
                  day: "Day 4",
                  breakfast: "Avocado toast with scrambled eggs",
                  lunch: "Grilled chicken with mixed greens salad",
                  dinner: "Shrimp and vegetable stir-fry",
                },
                {
                  day: "Day 5",
                  breakfast: "Turkey and cheese sandwich",
                  lunch: "Chicken quesadilla",
                  dinner: "Baked chicken with roasted broccoli",
                },
                {
                  day: "Day 6",
                  breakfast: "Omelette with vegetables",
                  lunch: "Turkey and avocado wrap",
                  dinner: "Grilled steak with roasted sweet potatoes",
                },
                {
                  day: "Day 7",
                  breakfast: "Greek yogurt with berries",
                  lunch: "Chicken Caesar salad",
                  dinner: "Baked salmon with quinoa",
                },
              ],
            },
          ];

        const user = await People.findOne({"name" : req.Bearing_User.name});
        
        const start_date = new Date(await user.created_at);
        const today = new Date();
        const weeks_passed = Math.floor((today - start_date) / (1000 * 60 * 60 *24 * 7));
        
        res.json({ msg :`displaying ${dietPlans[weeks_passed % 3].name} for week ${weeks_passed}` ,data : dietPlans[weeks_passed % 3].days});
    }catch(error){
      res.status(401).json({msg:error.message});
    }
}

const DietProgressController = async(req,res)=>{
  try{
    // req.body contains 0,1,2 for <3 , >3<7 ,7 checkboxes ticked
    const {progressBar}  = req.body;
    const user = await People.findOne({"name" : req.Bearing_User.name});
    const start_date = new Date(user.created_at);
    const today = new Date();
    const weeks_passed = Math.floor((today - start_date) / (1000 * 60 * 60 *24 * 7));
    /*const result = await People.updateOne(
      { name: "mohith" }, 
      { $set: {DietProgress:{...user.DietProgress , [weeks_passed]: progressBar }}}  
    );*/
    const result = await People.updateOne(
      { name: req.Bearing_User.name },
      { $set: { [`DietProgress.${weeks_passed}`]: progressBar } }
    )
    if (result.modifiedCount > 0) {
      res.json({msg : "updated successfully"});
    } else {
      res.json({msg : "not updated"});
    }
  }catch(err){
    res.status(401).json({message:err.message});
  }

}


module.exports = {DietDataController,DietProgressController};