<section class="hp-intro" id="about">
  <div class="hp-intro__text">
    <h1 class="hp-name">Shihao Weng <span class="hp-name__zh">翁诗浩</span></h1>
    <p class="hp-role">Ph.D. student, Nanjing University</p>
    <p>
      I am a third-year Ph.D. student at <a href="https://www.nju.edu.cn/en/" rel="external">Nanjing University</a>, advised by <a href="https://fengyang-nju.github.io/" rel="external">Prof.&nbsp;Yang Feng</a>. I&nbsp;am currently a visiting student at <a href="https://www.cuhk.edu.hk/" rel="external">The Chinese University of Hong Kong</a> with <a href="https://www.cse.cuhk.edu.hk/lyu/home" rel="external">Prof.&nbsp;Michael R.&nbsp;Lyu</a>, and before that spent a year at <a href="https://smu.edu.sg/" rel="external">Singapore Management University</a> working with <a href="https://xiaofeixie.bitbucket.io" rel="external">Prof.&nbsp;Xiaofei Xie</a>.
    </p>
    <p>
      My research is on <strong>trustworthy AI</strong>: making large language models and agents reliable, safe, and aligned with human values. I work across the model lifecycle, from how models are trained and aligned, to how their behavior is evaluated and understood, to how they are safeguarded once deployed in the real world.
    </p>
    <p class="hp-note">Feel free to reach out at <a href="mailto:shweng@smail.nju.edu.cn">shweng@smail.nju.edu.cn</a> to chat about research or&nbsp;collaboration.</p>
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
