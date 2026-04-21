import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {[{ title: 'Tite1', description: 'Desc1'}].map
            ((item, i) => (
                <BentoGridItem
                id={item.id}
                key={}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid