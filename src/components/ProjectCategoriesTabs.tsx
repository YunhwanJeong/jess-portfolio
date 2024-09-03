import AimmoPaymentsImage from '@images/aimmo-payments.png';
import AimmoRevampImage from '@images/aimmo-revamp.png';
import BuzzerBeaterMainImage from '@images/buzzer-beater-main.png';
import OrderSpotAppImage from '@images/orderspot-app.png';
import * as Tabs from '@radix-ui/react-tabs';
import Styles from './ProjectCategoriesTabs.module.css';

export default function ProjectCategoriesTabs() {
  return (
    <Tabs.Root className={Styles['tabs-root']} defaultValue="tab1">
      <Tabs.List aria-label="Projects by categories">
        <Tabs.Trigger className={Styles['tabs-trigger']} value="tab1">
          All
        </Tabs.Trigger>
        <span className={Styles['tabs-trigger-divider']}>∙</span>
        <Tabs.Trigger className={Styles['tabs-trigger']} value="tab2">
          B2B
        </Tabs.Trigger>
        <span className={Styles['tabs-trigger-divider']}>∙</span>
        <Tabs.Trigger className={Styles['tabs-trigger']} value="tab3">
          APP
        </Tabs.Trigger>
        <span className={Styles['tabs-trigger-divider']}>∙</span>
        <Tabs.Trigger className={Styles['tabs-trigger']} value="tab4">
          Side Project
        </Tabs.Trigger>
        <span className={Styles['tabs-trigger-divider']}>∙</span>
        <Tabs.Trigger className={Styles['tabs-trigger']} value="tab5">
          Design System
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className={Styles['tabs-content']} value="tab1">
        <a className={Styles.project}>
          <img src={AimmoRevampImage.src}></img>
        </a>
        <a className={Styles.project}>
          <img src={AimmoPaymentsImage.src}></img>
        </a>
        <a className={Styles.project}>
          <img src={OrderSpotAppImage.src}></img>
        </a>
        <a className={Styles.project}>
          <img src={BuzzerBeaterMainImage.src}></img>
        </a>
      </Tabs.Content>
    </Tabs.Root>
  );
}
