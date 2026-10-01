<section class="hp-intro" id="about">
  <div class="hp-intro__text">
    <h1 class="hp-name">Shihao Weng <span class="hp-name__zh">翁诗浩</span></h1>
    <p class="hp-role">Ph.D. student · Nanjing University</p>
    <p>
      I am a third-year Ph.D. student at <a href="https://www.nju.edu.cn/en/" rel="external">Nanjing University</a>, advised by <a href="https://fengyang-nju.github.io/" rel="external">Prof. Yang Feng</a>, and currently a visiting student at <a href="https://smu.edu.sg/" rel="external">Singapore Management University</a> with <a href="https://xiaofeixie.bitbucket.io" rel="external">Prof. Xiaofei Xie</a>.
    </p>
    <p>
      My research focuses on making <strong>LLM agents trustworthy and reliable</strong>. I currently work on two directions: <strong>self-evolving agents</strong>, which improve themselves toward more trustworthy behavior over time, and <strong>agent defense</strong>, which protects agents against adversarial inputs and compromised tools.
    </p>
    <p class="hp-note">I'm in Singapore now. Feel free to reach out about anything related to AI.</p>
    <nav class="hp-links" aria-label="Profiles">
      <a href="mailto:shweng@smail.nju.edu.cn"><i class="fas fa-envelope" aria-hidden="true"></i>Email</a>
      <a href="{{ site.author.cv | relative_url }}"><i class="fas fa-file-alt" aria-hidden="true"></i>CV</a>
      <a href="{{ site.author.googlescholar }}" rel="external"><i class="fas fa-graduation-cap" aria-hidden="true"></i>Scholar</a>
      <a href="https://github.com/{{ site.author.github }}" rel="external"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a>
    </nav>
  </div>
  <div class="hp-intro__photo">
    {% assign photo = site.author.photos | first %}
    <img class="hp-photo" src="{{ photo.src | relative_url }}" alt="{{ photo.alt }}" width="184" height="184" />
  </div>
</section>
