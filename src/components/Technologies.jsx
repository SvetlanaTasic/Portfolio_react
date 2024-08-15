import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiSass } from 'react-icons/si';
import { SiSqlite } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800p-4">
                    <FaHtml5 className="text-7xl text-orange-600" />
                </motion.div>

                <motion.div
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800p-4">
                    <SiSass className="text-7xl text-pink-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800p-4">
                    <SiBootstrap className="text-7xl text-purple-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800p-4">
                    <SiTailwindcss className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800p-4">
                    <SiJavascript className="text-7xl text-yellow-500 " />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800p-4">
                    <SiReact className="text-7xl text-blue-500 animate-spin" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800p-4">
                    <SiSqlite className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800p-4">
                    <SiGit className="text-7xl text-gray-600" />
                </motion.div>
            </motion.div>
        </div >
    )
}

export default Technologies;
