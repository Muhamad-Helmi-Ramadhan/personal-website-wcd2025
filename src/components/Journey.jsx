import React, { useState } from 'react';
import './Journey.css';

function Journey() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="journey-section" id="journey">
      <h2 className="about-title">My Journey</h2>
      <div className="journey-item">
        <div className="journey-card">
          <p>
            An educator with experience since 2018, actively teaching across various educational levels from elementary to high school, including inclusive schools for students with special needs (intellectual disabilities). Involved in teaching general subjects as well as developing students' interests and talents, particularly in music and marching band.
            Recognized as a patient, communicative, and adaptable teacher who is responsive to each student's unique needs. Committed to creating an inclusive and enjoyable learning environment that supports students’ growth both academically and in character.
          </p>
        </div>
      </div>

      <div className="journey-item">
        <div className="journey-card">
          <h3>Teaching Experience & Key Achievements</h3>
          <ul>
            <li><strong>SDIT Alyasmin 2 (2021-2024):</strong> Built music program from scratch; 90% of students showed improved confidence in performances.</li>
            <li><strong>SD Regina Pacis (2018):</strong> Assistant coach for competition preparation, focusing on physical training and confidence building.</li>
            <li><strong>SLB Mekarsari 2 - Tunagrahita (2024):</strong> Created sensory-friendly music tools from recycled materials, reducing learning anxiety by 60%.</li>
            <li><strong>SLB B & C Tunas Kasih 2 - Tunagrahita (2024):</strong> Developed peer-style interactive classroom that increased student participation by 75%.</li>
            <li><strong>PP Hamalatul Qur'an Al Falakiyah:</strong> Established complete music program including recruitment system and performance preparation.</li>
            <li><strong>SMPIT Alyasmin 2 (2021-Present):</strong> Trained student to win <strong>2nd Place in Individual Snare</strong> at JungleLand Festival 2021 (achieved in under 1 year).</li>
            <li><strong>SMP Taruna Terpadu (2020-2024):</strong> Created accelerated music program enabling new students to perform within 3 months.</li>
            <li><strong>SMA Taruna Terpadu (2021-Present):</strong>
              <ul className="achievement-sub-list">
                <li>🎵 <strong>2021:</strong> Secured 15-day performance contract at JungleLand Year-End Festival</li>
                <li>📺 <strong>2022:</strong> Opened for Dangdut Academy TV show</li>
              </ul>
            </li>
            <li><strong>SMK Taruna Terpadu (2021-Present):</strong>
              <ul className="achievement-sub-list">
                <li>🎄 <strong>2024-2025:</strong> Contracted for Christmas (2024) and New Year's (2025) performances at The Jungle Waterpark</li>
                <li><strong>Aug 2024:</strong> Selected as 1 of 8 elite marching bands to perform at Merah Putih Festival (Bogor)</li>
              </ul>
            </li>
            <li><strong>MAN 1 Cianjur (2023-Present):</strong> Developed intensive training program with 90% competition readiness rate.</li>
          </ul>

          <h4>Additional Marching Band Achievements:</h4>
          <ul className="achievements-list">
            <li>🥈 2nd Place in Drumbattle Division at Indonesian Student Marching Band Festival</li>
            <li>🥉 3rd Place - Best Field Commander, Ensemble Percussion Division</li>
            <li>🏅 4th Place - Sound Quality, Ensemble, and Musicality categories</li>
          </ul>
        </div>
      </div>

      <div className="journey-item">
        <div className="journey-card">
          <h3>Education</h3>
          <ul>
            <li><strong>Bachelor's Degree in Data Science (Ongoing)</strong> – Cakrawala University, 2024 – Present</li>
            <li><strong>Elementary Teacher Education</strong> – Alhukama Institute, Bogor, 2023-2024 <em>(Full Scholarship)</em></li>
            <li><strong>Theology and Philosophy</strong> – State Islamic University of Jakarta, 2022</li>
            <li><strong>Mathematics</strong> – Padang State University, 2021</li>
            <li><strong>Educational Technology</strong> – Semarang State University, 2020</li>
            <li><strong>High School Graduate</strong> – MAN 1 Bogor, 2020</li>
          </ul>
        </div>
      </div>

      <div className="achievement-container">
        <h2 className="section-title">My Achievements</h2>

        <div className="achievement-row">
          <div className="achievement-card">
            <div className="journey-block">
              <h3>2019</h3>
              <iframe
                width="100%"
                height="180"
                src="https://www.youtube.com/embed/-BJ0WH5Qm0A?start=9"
                title="Drumbattle Presidential Cup 2019"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <ul className="achievement-list">
                <li>🏅 10th Place Drumbattle Grand Prix Marching Band - Presidential Cup</li>
              </ul>
            </div>
          </div>

          <div className="achievement-card">
            <h3>2020</h3>
            <ul className="achievement-list">
              <li>📊 Ranked 42/690 in INSIGHT MATHEMATICS COMPETITION</li>
              <li>🎺 4th Place Individual Trumpet Asian Virtual Championships</li>
              <li>🎯 UTBK Score 564 (Indonesian University Entrance Test)</li>
            </ul>
          </div>

          <div className="achievement-card">
            <h3>2022</h3>
            <ul className="achievement-list">
              <li>🌟 Best Ambassador Meraki Asa 2022</li>
              <li>🎥 2nd Place Video Lipsync Competition APAC Rising</li>
            </ul>
          </div>

          <div className="achievement-card">
            <h3>2023</h3>
            <img
              src="/lomba2023.jpg"
              alt="1st Place Video Creating For Impact Forestry Museum"
              className="achievement-image"
              onClick={handleImageClick}
              style={{ cursor: 'pointer' }}
            />
            <ul className="achievement-list">
              <li>🎬 1st Place Video Creating For Impact Forestry Museum</li>
              <li>🎮 Ascendant Rank in Valorant (FPS Game)</li>
              <li>🎹 Ranked 32/1021 National Pianica Ensemble Competition</li>
            </ul>
          </div>
        <div className="achievement-card">
          <h3>2024</h3>
            <a href="https://www.instagram.com/p/C4LQ4O6SbUx/?next=%2F&img_index=6" target="_blank" rel="noopener noreferrer">
              <img src="/favoritpublic.jpg" alt="Instagram Post" className="instagram-thumbnail" />
            </a>
              <ul className="achievement-list">
            <li>🎤 Favorite Table Topics Speaker at Jakartamotivators</li>
          <li>🎼 Ranked 9/890 National Pianica Ensemble Competition</li>
        </ul>
      </div>
        <div className="achievement-card">
          <h3>2025</h3>
            <ul className="achievement-list">
              <a href='https://www.instagram.com/p/DIoC6ocBaTI/?img_index=1' target='_blank' rel='noopener noreferrer'>
                <img src='juara2025.png' alt='instagram Post' className='instagram-thumbnail'></img>
                </a>
              <li>🥈 2nd Place Best Student Ambassador of Gamefinity</li>
              <li>📹 Social Media Post with 641K Views & 59K Likes</li>
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <img
            src="/lomba2023.jpg"
            alt="Enlarged View"
            className="modal-image"
          />
        </div>
      )}
    </section>
  );
}

export default Journey;
