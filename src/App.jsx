import Pizza from "./Pizza";
import Order from "./order";

const App = () => {
    return (
        <div> 
            <h1>Padre Ginos</h1>
            <Order />
            {/* <Pizza name="Margherita" description="Tomato, mozzarella, fresh basil, salt, and extra-virgin olive oil." image={"/public/pizzas/bbq_ckn.webp"}/>
            <Pizza name="Pepperoni" description="Tomato sauce, mozzarella, and pepperoni." image={"/public/pizzas/pepperoni.webp"} />
            <Pizza name="Vegetarian" description="Tomato sauce, mozzarella, mushrooms, bell peppers, onions, and olives." image={"/public/pizzas/ital_veggie.webp"} />
            <Pizza name="Hawaiian" description="Tomato sauce, mozzarella, ham, and pineapple." image={"/public/pizzas/hawaiian.webp"}/>
            <Pizza name="Meat Lovers" description="Tomato sauce, mozzarella, pepperoni, sausage, bacon, and ham." image={"/public/pizzas/big_meat.webp"} />
            <Pizza name="Supreme" description="Tomato sauce, mozzarella, pepperoni, sausage, bacon, mushrooms, bell peppers, onions, and olives." image={"/public/pizzas/ital_supr.webp"} /> */}
        </div>
    );
};

export default App;