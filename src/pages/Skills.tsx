import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3Alt, faJs, faNodeJs, faShopify, faGithub, faGit, faGitlab, faNpm, faChrome, faFigma } from '@fortawesome/free-brands-svg-icons'

function Skills() {
    const skills = [
        { icon: faReact, name: 'React', color: 'text-blue-400' },
        { icon: faHtml5, name: 'HTML5', color: 'text-orange-500' },
        { icon: faCss3Alt, name: 'CSS3', color: 'text-blue-500' },
        { icon: faJs, name: 'JavaScript', color: 'text-yellow-400' },
        { icon: faNodeJs, name: 'Node.js', color: 'text-green-500' },
        { icon: faShopify, name: 'Shopify', color: 'text-green-400' },
        { icon: faGithub, name: 'GitHub', color: 'text-gray-300' },
        { icon: faGit, name: 'Git', color: 'text-orange-600' },
        { icon: faGitlab, name: 'GitLab', color: 'text-orange-500' },
        { icon: faNpm, name: 'NPM', color: 'text-red-500' },
        { icon: faChrome, name: 'Chrome DevTools', color: 'text-blue-500' },
        { icon: faFigma, name: 'Figma Dev', color: 'text-pink-500' },
    ]

    return (
        <>
            <Header />
            <main className="container mx-auto p-8">
                <h2 className="text-5xl mb-8 text-pink-300 font-primary text-center drop-shadow-x">My Skills</h2>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm flex flex-col items-center justify-center gap-4 hover:bg-gray-800/90 transition-all hover:scale-105"
                            >
                                <FontAwesomeIcon
                                    icon={skill.icon}
                                    className={skill.color}
                                    size="4x"
                                />
                                <p className="font-secondary text-emerald-400 text-xl">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Skills
