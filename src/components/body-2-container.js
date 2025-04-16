import { useState } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { fadeInUp, staggerContainer, imageAnimation } from './TabAnimation'

const TabSlider = () => {
  const [activeTab, setActiveTab] = useState('slide-2'); // Default to second tab

  const tabs = [
    {
      id: 'slide-1',
      class: 'tab1',
      icon: 'https://dripify.io/wp-content/uploads/2025/02/dc1.svg',
      text: 'Drip campaigns',
      content: {
        title: 'Automate sales on LinkedIn & email',
        description: 'Contact thousands of prospects per month on LinkedIn and via Email through fully automated & hyper-personalized sequence campaigns',
        image: {
          desktop: 'https://dripify.io/wp-content/uploads/2025/02/drip-camp-img.webp',
          mobile: 'https://dripify.io/wp-content/uploads/2025/02/hometab1-mob.svg'
        },
        learnMoreLink: 'https://dripify.io/features/drip-campaigns/',
        bgColor: 'bg-[#F5F8FF]'
      }
    },
    {
      id: 'slide-2',
      class: 'tab2',
      icon: 'https://dripify.io/wp-content/uploads/2025/02/e1.svg',
      text: 'Find emails',
      content: {
        title: 'Enrich leads with verified business emails',
        description: 'Find pre-verified business email addresses of leads within seconds to enrich your CRM or launch Email campaigns',
        image: {
          desktop: 'https://dripify.io/wp-content/uploads/2025/03/email-finder-img.webp',
          mobile: 'https://dripify.io/wp-content/uploads/2025/02/email-finder-mob.webp'
        },
        learnMoreLink: 'https://dripify.io/features/data-enrichment/',
        bgColor: 'bg-[#FFF5F5]'
      }
    },
    {
      id: 'slide-3',
      class: 'tab3',
      icon: 'https://dripify.io/wp-content/uploads/2025/02/Business-Chart.svg',
      text: 'Analytics',
      content: {
        title: 'Optimize based on stats not guesses',
        description: "Monitor your drip campaign performance, review LinkedIn and Email activity, and analyze your team's performance",
        image: {
          desktop: 'https://dripify.io/wp-content/uploads/2025/02/hometabs3.svg',
          mobile: 'https://dripify.io/wp-content/uploads/2025/02/hometabs3-mob.svg'
        },
        learnMoreLink: 'https://dripify.io/features/advanced-analytics/',
        bgColor: 'bg-[#F5F8FF]'
      }
    },
    {
      id: 'slide-4',
      class: 'tab4',
      icon: 'https://dripify.io/wp-content/uploads/2025/02/Group.svg',
      text: 'Inbox',
      content: {
        title: 'Close deals faster with a dedicated inbox',
        description: 'Manage all your LinkedIn conversations in one place to keep your communication with leads organized and close deals more efficiently',
        image: {
          desktop: 'https://dripify.io/wp-content/uploads/2025/03/inbox-img.webp',
          mobile: 'https://dripify.io/wp-content/uploads/2025/03/inbox-img-mob.webp'
        },
        learnMoreLink: 'https://dripify.io/features/personal-inbox/',
        bgColor: 'bg-[#FFF7F5]'
      }
    }
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="tab-slider-container">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex justify-between items-center relative mb-[25px] features-tabs campaigns-tabs"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`button-tab ${tab.class} ${
                activeTab === tab.id ? 'active' : ''
              } flex items-center px-6 py-3 relative transition-all duration-300`}
            >
              <img
                src={tab.icon}
                width="24"
                height="24"
                className="mr-3"
                alt={tab.text}
              />
              {tab.text}
            </motion.button>
          ))}
          <motion.span 
            className="glider absolute bottom-0 h-[2px] bg-primary"
            animate={{
              left: `${(tabs.findIndex(tab => tab.id === activeTab) * 100) / tabs.length}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            style={{
              width: `${100 / tabs.length}%`
            }}
          />
        </motion.div>

        <div className="tab-content relative min-h-[80vh]">
          <AnimatePresence mode="wait" initial={false}>
            {tabs.map((tab) => 
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                  variants={staggerContainer}
                  className={`campaign-item ${tab.content.bgColor}`}
                >
                  <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-12">
                      <motion.div 
                        className="lg:w-4/12 z-10"
                        variants={staggerContainer}
                      >
                        <motion.h2 
                          variants={fadeInUp}
                          className="text-3xl font-bold mb-4"
                        >
                          {tab.content.title}
                        </motion.h2>
                        <motion.p 
                          variants={fadeInUp}
                          className="text-gray-600 mb-8"
                        >
                          {tab.content.description}
                        </motion.p>
                        <motion.a
                          variants={fadeInUp}
                          href={tab.content.learnMoreLink}
                          className="hidden md:inline-flex items-center px-6 py-2 border-2 border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300"
                          rel="nofollow"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Learn more
                        </motion.a>
                      </motion.div>

                      <motion.div 
                        className="lg:w-8/12 relative"
                        variants={imageAnimation}
                      >
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet={tab.content.image.mobile}
                          />
                          <img
                            src={tab.content.image.desktop}
                            alt={tab.content.title}
                            className="w-full h-auto"
                            style={{
                              maxHeight: 'calc(80vh - 100px)',
                              objectFit: 'contain'
                            }}
                          />
                        </picture>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
};

const Body2Container = () => {
  return (
    <motion.div 
      initial="initial"
      whileInView="animate"
      viewport={{
        once: false,
        amount: 0.3
      }}
      className="py-16"
    >
      <TabSlider />
    </motion.div>
  );
};

export default Body2Container;
