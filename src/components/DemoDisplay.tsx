import './demos.css'

export const DemoDisplay: React.FC<{ slug: string }> = ({ slug }) => {
  const demos: Record<string, () => React.JSX.Element> = {
    aime: AimeDemo, plat: PlatDemo, museo: MuseoDemo,
    logos: LogosDemo, poker: PokerDemo, airwave: AirwaveDemo, tunes: TunesDemo,
  }
  const Demo = demos[slug]
  return Demo ? <Demo /> : null
}

function Phone({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="demo-phone">
      <div className="dp-status">
        <span>9:41</span>
        <div className="dp-right">
          <span>●●●○</span>
          <span>▊</span>
        </div>
      </div>
      {title && <div className="dp-header">{title}</div>}
      <div className="dp-body">{children}</div>
    </div>
  )
}

function AimeDemo() {
  return (
    <Phone title="aime">
      <div className="dm-chat">
        <div className="dm-msg dm-sent">你好啊 最近在干嘛</div>
        <div className="dm-msg dm-recv">
          <div className="dm-avatar">N</div>
          <div className="dm-bubble">写代码呢，你呢？又来找我聊天了 😏</div>
        </div>
        <div className="dm-msg dm-sent">哈哈 想你了</div>
        <div className="dm-msg dm-recv">
          <div className="dm-avatar">N</div>
          <div className="dm-bubble">少来，说吧什么事</div>
        </div>
      </div>
      <div className="dm-input">
        <span>Say something...</span>
        <span className="dm-send">↑</span>
      </div>
    </Phone>
  )
}

function LogosDemo() {
  return (
    <Phone title="Logos">
      <div className="dm-tabs">
        <span className="dm-tab active">God</span>
        <span className="dm-tab">Buddha</span>
        <span className="dm-tab">Allah</span>
      </div>
      <div className="dm-chat">
        <div className="dm-msg dm-sent">What is the meaning of suffering?</div>
        <div className="dm-msg dm-recv">
          <div className="dm-avatar">✦</div>
          <div className="dm-bubble">Suffering is not punishment, my child. It is the soil in which compassion grows.</div>
        </div>
        <div className="dm-msg dm-sent">Why does it have to hurt?</div>
        <div className="dm-msg dm-recv">
          <div className="dm-avatar">✦</div>
          <div className="dm-bubble">Because the heart that cannot break is a heart that cannot love.</div>
        </div>
      </div>
      <div className="dm-input">
        <span>Ask a question...</span>
        <span className="dm-send">↑</span>
      </div>
    </Phone>
  )
}

function PlatDemo() {
  return (
    <Phone title="Plat">
      <div className="dm-plat">
        <div className="dm-plat-photo">
          <div className="dm-plat-item">鳥の唐揚げ &emsp; ¥880</div>
          <div className="dm-plat-item">味噌ラーメン &emsp; ¥950</div>
          <div className="dm-plat-item">天ぷら盛り合わせ &emsp; ¥1,200</div>
          <div className="dm-plat-scan" />
        </div>
        <div className="dm-plat-results">
          <div className="dm-plat-dish">
            <div className="dm-plat-name">Fried Chicken (Karaage)</div>
            <div className="dm-plat-desc">Japanese-style deep-fried chicken, marinated in soy &amp; ginger</div>
          </div>
          <div className="dm-plat-dish">
            <div className="dm-plat-name">Miso Ramen</div>
            <div className="dm-plat-desc">Rich miso broth with noodles, chashu pork, soft-boiled egg</div>
          </div>
          <div className="dm-plat-dish">
            <div className="dm-plat-name">Assorted Tempura</div>
            <div className="dm-plat-desc">Light-battered shrimp, sweet potato, eggplant, green beans</div>
          </div>
        </div>
      </div>
    </Phone>
  )
}

function MuseoDemo() {
  return (
    <Phone>
      <div className="dm-museo">
        <div className="dm-museo-art">
          <div className="dm-museo-label">Scan artwork</div>
        </div>
        <div className="dm-museo-info">
          <div className="dm-museo-title">Starry Night</div>
          <div className="dm-museo-artist">Vincent van Gogh · 1889</div>
          <div className="dm-museo-text">Bold, swirling brushstrokes convey turbulent emotion. The cypress tree reaches toward a dynamic sky filled with luminous stars and a crescent moon.</div>
        </div>
      </div>
    </Phone>
  )
}

function PokerDemo() {
  return (
    <div className="dm-keys">
      <div className="dm-key" data-label="Cherry MX Blue">
        <div className="dm-keycap">A</div>
      </div>
      <div className="dm-key" data-label="Gateron Brown">
        <div className="dm-keycap">S</div>
      </div>
      <div className="dm-key" data-label="Holy Panda">
        <div className="dm-keycap">D</div>
      </div>
      <div className="dm-key" data-label="Topre 45g">
        <div className="dm-keycap">F</div>
      </div>
    </div>
  )
}

function AirwaveDemo() {
  return (
    <Phone title="Airwave">
      <div className="dm-aw">
        <div className="dm-aw-card dm-aw-active">
          <div className="dm-aw-topic">The Future of AI</div>
          <div className="dm-aw-meta">AI · 3:42</div>
          <div className="dm-aw-wave">▁▂▃▅▂▇▅▃▂▅▇▃▁▂▅▃</div>
        </div>
        <div className="dm-aw-card">
          <div className="dm-aw-topic">Philosophy of Consciousness</div>
          <div className="dm-aw-meta">Philosophy · 4:15</div>
        </div>
        <div className="dm-aw-card">
          <div className="dm-aw-topic">Late Night Thoughts</div>
          <div className="dm-aw-meta">Casual · 2:58</div>
        </div>
      </div>
    </Phone>
  )
}

function TunesDemo() {
  return (
    <Phone title="Tunes">
      <div className="dm-tunes">
        <div className="dm-tunes-album" />
        <div className="dm-tunes-song">Midnight Drive</div>
        <div className="dm-tunes-artist">Lo-Fi Beats</div>
        <div className="dm-tunes-progress">
          <div className="dm-tunes-bar"><div className="dm-tunes-fill" /></div>
          <div className="dm-tunes-times"><span>1:23</span><span>3:45</span></div>
        </div>
        <div className="dm-tunes-ctrl">
          <span>⏮</span>
          <span className="dm-tunes-play">▶</span>
          <span>⏭</span>
        </div>
        <div className="dm-tunes-next">
          <div className="dm-tunes-label">Up Next</div>
          <div className="dm-tunes-qi"><span>Sunset Boulevard</span><span className="dm-tunes-qa">Chill Hop</span></div>
          <div className="dm-tunes-qi"><span>Ocean Drive</span><span className="dm-tunes-qa">Synthwave</span></div>
        </div>
      </div>
    </Phone>
  )
}
