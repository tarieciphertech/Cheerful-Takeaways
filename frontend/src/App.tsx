import { useState } from 'react'
import { ShoppingBag, MapPin, Clock, Plus, Minus, Utensils, ArrowRight } from 'lucide-react'

const dishes = [
  { id: 1, name: 'Sadza & Beef Stew', category: 'Traditional favourites', description: 'A hearty Zimbabwean classic with slow-cooked beef.', price: 6.5, tag: 'Customer favourite' },
  { id: 2, name: 'Sadza & Chicken', category: 'Traditional favourites', description: 'Tender chicken served with sadza and seasonal vegetables.', price: 7, tag: 'Popular' },
  { id: 3, name: 'Rice & Beef Stew', category: 'Hearty plates', description: 'Fluffy rice with rich, homestyle beef stew.', price: 6.5, tag: 'Made with care' },
]
export default function App() {
  const [cart, setCart] = useState<Record<number, number>>({})
  const count = Object.values(cart).reduce((a, b) => a + b, 0)
  const total = dishes.reduce((sum, dish) => sum + dish.price * (cart[dish.id] || 0), 0)
  const update = (id: number, delta: number) => setCart(current => {
    const next = { ...current, [id]: Math.max(0, (current[id] || 0) + delta) }
    if (!next[id]) delete next[id]
    return next
  })
  return <main>
    <nav className="nav"><a className="brand" href="#"><span className="brand-mark"><Utensils size={19}/></span><span>Cheerful <b>Takeaways</b></span></a><a className="cart-link" href="#order"><ShoppingBag size={18}/> <span>Your order</span><b>{count}</b></a></nav>
    <section className="hero"><div className="hero-copy"><span className="eyebrow"><span className="dot"/> FRESHLY PREPARED IN GWERU</span><h1>Good food.<br/><em>Good mood.</em></h1><p>Traditional favourites, made with care and served with a smile. Your next comforting meal is just a few taps away.</p><a className="primary" href="#menu">Explore the menu <ArrowRight size={17}/></a><div className="location"><MapPin size={16}/> Moonlight Building, Gweru, Zimbabwe</div></div><div className="hero-art" aria-label="Traditional meal illustration"><div className="sun"></div><div className="plate"><div className="meal">🍛</div><span>MADE WITH LOVE</span></div><div className="art-note">Tradition served<br/>with a smile ✦</div></div></section>
    <section className="promise"><div><Clock/><b>Prepared fresh</b><span>Made when you order</span></div><div><ShoppingBag/><b>Easy ordering</b><span>Pickup or delivery</span></div><div><Utensils/><b>Homestyle flavour</b><span>Traditional favourites</span></div></section>
    <section id="menu" className="menu-section"><div className="section-heading"><div><span className="eyebrow">A LITTLE TASTE OF HOME</span><h2>Our menu</h2><p>Comfort food for every kind of day.</p></div><span className="menu-count">MENU PREVIEW · 03 ITEMS</span></div><div className="dish-grid">{dishes.map(dish => <article className="dish" key={dish.id}><div className="dish-image"><span className="dish-emoji">{dish.id === 1 ? '🍲' : dish.id === 2 ? '🍗' : '🍚'}</span><span className="tag">{dish.tag}</span></div><div className="dish-body"><small>{dish.category}</small><h3>{dish.name}</h3><p>{dish.description}</p><div className="dish-bottom"><strong>${dish.price.toFixed(2)}</strong><div className="quantity"><button aria-label="Remove one" onClick={() => update(dish.id, -1)}><Minus size={15}/></button><span>{cart[dish.id] || 0}</span><button aria-label="Add one" onClick={() => update(dish.id, 1)}><Plus size={15}/></button></div></div></div></article>)}</div></section>
    <section id="order" className="order-bar"><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>Your order, your way.</h2><p>Choose collection at Moonlight Building or arrange delivery at checkout.</p></div><div className="order-total"><span>{count} item{count === 1 ? '' : 's'} · ${total.toFixed(2)}</span><button disabled={!count} onClick={() => alert('Checkout flow is the next implementation milestone.')}>Continue to checkout <ArrowRight size={17}/></button></div></section>
    <footer><span>© {new Date().getFullYear()} Cheerful Takeaways</span><span>Tradition served with a smile.</span></footer>
  </main>
}
