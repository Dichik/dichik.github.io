import React, { useState } from 'react';
import './Posts.css';

const posts = [
    {
        id: 1,
        title: "Here is going to be first post",
        content: ["TBD."],
        tags: ['tag1']
    },
];

const experiments = [
    {
        id: 2,
        title: "Experiment 2",
        content: ["This is the content of the second experiment."],
        tags: ['tag1']
    },
    {
        id: 1,
        title: "Experiment 1 - блог про експерименти",
        content: [
            "чомусь мені так хочеться. це складно пояснити, але хочеться.",
            "зараз трішки пафосних слів, але в житті все можна описати експериментами. успішними і не дуже. ідея в тому, щоб виносити з того якісь уроки пробувати ще раз, але в трішки інший спосіб :)",
            "вся ідея цього блогу показати силу ітеративності. я дійшов висновку, що останні роки, все що я робив - це просто ітерував те, що працює і не працює. будь-яка зміна, вона ітеративна. перед нею слідує ще n різних кроків. і тут головне \"різних\", а не n 🤓",
            "тому цей блог також свого роду експеримент. я запускаю його без підготовки, лише трішечки. будемо покращувати в процесі. все рівно ніколи не буду готовий, а ще і скоро Новий рік, а там буде ковбаска, тому...",
            "в усякому разі, хочеться вірити, що це діло не загнеться через... завтра... чи відчуваю я страх? так. розгубленість? так. чи турбуюся я через це? ні 🙂",
            "чи буде це весело? еге ж, ще й як. тому, поооїхали! перший з 10000 🥳"
        ],
        tags: ['blog', 'experiments', 'beginning']
    },
];

const generatePreview = (contentArray, maxLength = 100) => {
    const preview = contentArray.join(' ');
    if (preview.length <= maxLength) {
        return preview;
    }
    return preview.substring(0, maxLength) + '...';
};

function Posts() {
    const [activeTab, setActiveTab] = useState('posts');
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSelectedItem(null);
        setSearchTerm('');
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleGoBack = () => {
        setSelectedItem(null);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filterItemsByTag = (item) => {
        return item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    };

    const filteredPosts = posts.filter(filterItemsByTag);
    const filteredExperiments = experiments.filter(filterItemsByTag);

    return (
        <div className='posts-container'>
            <div className='tab-buttons'>
                <button className={activeTab === 'posts' ? 'active' : ''} onClick={() => handleTabChange('posts')}>Posts</button>
                <button className={activeTab === 'experiments' ? 'active' : ''} onClick={() => handleTabChange('experiments')}>Experiments</button>
            </div>

            {/* <div className="search-tags-section">
                <input
                    type="text"
                    placeholder="Search by tag..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div> */}

            {activeTab === 'posts' && !selectedItem && (
                <div className="items-list">
                    {filteredPosts.map(post => (
                        <div key={post.id} className="post-item" onClick={() => handleItemClick(post)}>
                            <h2>{post.title}</h2>
                            <p>{generatePreview(post.content)}</p>
                            {/* <div className="tags">
                                {post.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div> */}
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'experiments' && !selectedItem && (
                <div className="items-list">
                    {filteredExperiments.map(experiment => (
                        <div key={experiment.id} className="post-item" onClick={() => handleItemClick(experiment)}>
                            <h2>{experiment.title}</h2>
                            <p>{generatePreview(experiment.content)}</p>
                            <div className="tags">
                                {experiment.tags.map((tag, index) => (
                                    <span key={index} className="tag">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {selectedItem && (
                <div className="selected-item">
                    <button onClick={handleGoBack} className="go-back">Go Back</button>
                    <h2>{selectedItem.title}</h2>
                    {selectedItem.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <div className="tags">
                        {selectedItem.tags.map((tag, index) => (
                            <span key={index} className="tag">#{tag}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Posts;