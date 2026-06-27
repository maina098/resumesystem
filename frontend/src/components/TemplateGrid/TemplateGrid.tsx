import Image from 'next/image';
import Link from 'next/link';
import styles from './TemplateGrid.module.css';

const templates = [
  { id: '1', title: 'Minimalist White & Grey', author: 'Olivia Wilson', imageUrl: '/templates/template_olivia.png' },
  { id: '2', title: 'Modern Professional', author: 'Lorna Alvarado', imageUrl: '/templates/template_lorna.png' },
  { id: '3', title: 'Executive Sidebar', author: 'Richard Sanchez', imageUrl: '/templates/template_richard.png' },
  { id: '4', title: 'Corporate Classic', author: 'Harper Russo', imageUrl: '/templates/template_harper.png' },
  { id: '5', title: 'Elegant Modern', author: 'Jamie Chastain', imageUrl: '/templates/template_5.png' },
  { id: '6', title: 'Blue Top Header', author: 'Olivia Sanchez', imageUrl: '/templates/template_6.png' },
  { id: '7', title: 'Bold Red Graphic', author: 'Estelle Darcy', imageUrl: '/templates/template_7.png' },
  { id: '8', title: 'Science & Engineering', author: 'Emma Ahearn', imageUrl: '/templates/template_8.png' },
  { id: '9', title: 'Light Blue Right Sidebar', author: 'Donna Stroupe', imageUrl: '/templates/template_9.png' },
  { id: '10', title: 'Slate Top Header', author: 'Emaa Warner', imageUrl: '/templates/template_10.png' },
  { id: '11', title: 'Teal Left Sidebar', author: 'Isabel Schumacher', imageUrl: '/templates/template_11.png' },
  { id: '12', title: 'Minimalist Two-Column', author: 'Lorna Alvarado', imageUrl: '/templates/template_12.png' },
  { id: '13', title: 'Dark Grey Sidebar', author: 'Isabel Mercado', imageUrl: '/templates/template_13.png' },
  { id: '14', title: 'Clean White Columns', author: 'Daniel Gallego', imageUrl: '/templates/template_14.png' },
  { id: '15', title: 'Beige Accents', author: 'Avery Davis', imageUrl: '/templates/template_15.png' },
  { id: '16', title: 'Pastel Pink Sidebar', author: 'Olivia Wilson', imageUrl: '/templates/template_16.png' },
  { id: '17', title: 'Two Tone Header', author: 'Donna Stroupe', imageUrl: '/templates/template_17.png' },
  { id: '18', title: 'Dark Blue Sidebar', author: 'Richard Sanchez', imageUrl: '/templates/template_18.png' },
  { id: '19', title: 'Deep Purple Sidebar', author: 'Korina Villanueva', imageUrl: '/templates/template_19.png' },
  { id: '20', title: 'Grey Header Block', author: 'Lorna Alvarado', imageUrl: '/templates/template_20.png' },
  { id: '21', title: 'Structured Boxy Layout', author: 'Pedro Fernandes', imageUrl: '/templates/template_21.png' },
  { id: '22', title: 'Ultra Minimalist', author: 'Laya Abdelrahman', imageUrl: '/templates/template_22.png' },
];

const TemplateGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {templates.map((template) => (
          <div key={template.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image 
                src={template.imageUrl} 
                alt={template.title} 
                fill 
                className={styles.image}
              />
              <div className={styles.overlay}>
                <Link href={`/editor/${template.id}`} className={styles.customizeBtn}>
                  Customize this template
                </Link>
              </div>
            </div>
            <div className={styles.cardInfo}>
              <h3 className={styles.cardTitle}>{template.title}</h3>
              <p className={styles.cardAuthor}>{template.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateGrid;
