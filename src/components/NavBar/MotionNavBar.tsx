"use client"

import * as motion from "motion/react-client"
import { useState } from "react"

export default function SharedLayoutAnimation() {
    const [selectedTab, setSelectedTab] = useState(tabs[1])

    return (

        <nav>
            <ul style={tabsContainer}>
                {tabs.map((item) => (
                    <motion.li
                        key={item.label}
                        initial={true}
                        // animate={{
                        //     backgroundColor:
                        //         item === selectedTab ? "#eee" : "#eee0",
                        // }}
                        style={tab}
                        onClick={() => setSelectedTab(item)}
                    >
                        {item.label}
                        {item === selectedTab ? (
                            <motion.div
                                style={underline}
                                layoutId="underline"
                                id="underline"
                            />
                        ) : null}
                    </motion.li>
                ))}
            </ul>
        </nav>
    )
}


const tabsStyles: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontWeight: 500,
}

const tabsContainer: React.CSSProperties = {
  ...tabsStyles,
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  marginLeft: "auto",
};

const tab: React.CSSProperties = {
  ...tabsStyles,
  position: "relative",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.3rem 1rem",
  userSelect: "none",
//   color: "var(--primary-foreground)",
  flex: "none", // evita que se estire
};

const underline: React.CSSProperties = {
    position: "absolute",
    bottom: -3,
    left: 0,
    right: 0,
    height: 3,
    background: "var(--foreground)",
}


const allIngredients = [
    { label: "Home" },
    { label: "Nosotros" },
    { label: "Servicios" },
    { label: "Precios" },
    { label: "Contactanos" },
]

const [home, us, servicios, price, call] = allIngredients
const tabs = [home, us, servicios, price, call]

