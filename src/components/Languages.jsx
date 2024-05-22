export default function Languages() {
  return (
    <div className="w-[74vw] flex justify-center items-center ">
      <div className="flex justify-start items-start bg-gray-900 text-white font-mono p-4 rounded-l-lg text-[0.75rem] w-[32vw]">
        <div className="mr-4 text-right text-gray-500">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
        </div>
        <div className="text-left">
          <p><span className="text-purple-400">class</span> <span className="text-blue-400">Languages</span> &#123;</p>
          <p>&nbsp;&nbsp;<span className="text-green-400">constructor</span>() &#123;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.<span className="text-yellow-400">computerLanguages</span> = [</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"JavaScript",</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"React",</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"C#",</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".NET",</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"SCSS"</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;];</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.<span className="text-yellow-400">humanLanguages</span> = [</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"English",</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Korean",</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Mandarin Chinese"</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;];</p>
          <p>&nbsp;&nbsp;&#125;</p>
        </div>
      </div>
      <div className="flex justify-start items-start bg-gray-900 text-white font-mono p-4 rounded-r-lg text-[0.75rem] w-[32vw]">
        <div className="mr-4 text-right text-gray-500">
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>19</p>
          <p>20</p>
          <p>21</p>
          <p>22</p>
          <p>23</p>
          <p>24</p>
          <p>25</p>
          <p>26</p>
          <p>27</p>
          <p>28</p>
          <p>29</p>
          <p>30</p>
        </div>
        <div className="text-left">
          <p>&nbsp;&nbsp;<span className="text-green-400">logLanguages</span>() &#123;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">console</span>.<span className="text-blue-400">log</span>(</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">&#96;Hayeong speaks $&#123;</span></p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.<span className="text-yellow-400">humanLanguages</span>.<span className="text-purple-400">join</span>(<span className="text-yellow-400">", "</span>)<span className="text-green-400">&#125;.&#96;</span></p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;);</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">console</span>.<span className="text-blue-400">log</span>(</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">&#96;She is well versed in $&#123;</span></p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.<span className="text-yellow-400">computerLanguages</span>.<span className="text-purple-400">join</span>(<span className="text-yellow-400">", "</span>)<span className="text-green-400">&#125;.&#96;</span></p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;);</p>
          <p>&nbsp;&nbsp;&#125;</p>
          <p>&#125;</p>
        </div>
      </div>
    </div>
  )
}

// { becomes &#123;
// } becomes &#125;
// / becomes &#47;
// < becomes &lt;
// > becomes &gt;