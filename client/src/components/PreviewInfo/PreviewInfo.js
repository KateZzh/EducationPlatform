import style from "./style.module.css";

function PreviewInfo() {
  return (
    <>
      <div className={style.preview}>
        <div className={style.previewInfo}>
          <p className={style.discription}>E-COURSE PLATFORM</p>
          <h1>Learning and teaching online, made easy.</h1>
          <p className={style.info}>Any subject, in any language, on any device, for all ages!</p>

          <div className={style.btnInfo}>About platform</div>

          <div className={style.statistic}>
            <div className={style.statWrapper}>
              <div className={style.imgLightning}></div>
              <p className={style.number}>600</p>
              <div>+</div>
            </div>

            <p className={style.students}>Students</p>
          </div>
        </div>

        <div className={style.previewGuy}></div>
      </div>

      <div className={style.learningWrapper}>
        <div className={style.learning}>
          <div className={style.learningImg}></div>

          <div className={style.learningInfo}>
            <h1>Learn a language in a playful way</h1>
            <p>Make learning programming languages more fun with mini-games</p>

            <div className={style.btnWrapper}>
              <div className={style.sprintBtn}></div>

              <div className={style.tasksBtn}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.knowledge}>
        <div className={style.knowledgeInfo}>
          <h1>Increase your knowledge</h1>
          <p>Traditional and new effective approaches to learning languages</p>

          <div className={style.btnKnowledge}>Textbook →</div>
        </div>

        <div className={style.knowledgeImg}></div>
      </div>

      <div className={style.progressWrapper}>
        <div className={style.progress}>
          <div className={style.progressImg}></div>

          <div className={style.statistics}>
            <h1>Watch your progress every day</h1>
            <p>Save statistics on your achievements and mistakes</p>

            <div className={style.btnStatistics}>Statistics →</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreviewInfo;
