import ParentFunctionComponent from "@/components/life-cycle/issues/FunctionComponent";

type Props = {};

function LifeCycleIssueOne({}: Props) {
  return (
    <div>
      {/* <ParentClassComponent /> */}
      <ParentFunctionComponent />
    </div>
  );
}

export default LifeCycleIssueOne;
