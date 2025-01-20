import { create } from 'react-test-renderer';
import { ProfileStatus } from './ProfileStatus';
import React from 'react';

describe('ProfileStatus Component', () => {
    test('status from props should be in the state', () => {
        const ref = React.createRef<ProfileStatus>();
        create(<ProfileStatus ref={ref} status="Hello" updateStatus={() => {}} />);
        const root = ref.current;
        expect(root?.state.status).toBe('Hello');
    });
    test('after creation span should be displayed', async () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {}} />);
        const root = component.root;
        const span = await root.findByType('span');
        expect(span).toBeTruthy();
    });
    test('after creation input should not be displayed', async () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {}} />);
        const root = component.root;
        await expect(async () => {
            await root.findByType('input');
        }).rejects.toThrow();
    });
    test('after creation span should be correct contain', async () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {}} />);
        const root = component.root;
        const span = await root.findByType('span');
        expect(span.children[0]).toEqual('Hello');
    });
    test('input should be display in editMode instead of span', async () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {}} />);
        const root = component.root;
        const span = await root.findByType('span');
        span.props.onDoubleClick();
        const input = await root.findByType('input');
        expect(input.props.value).toEqual('Hello');
    });
    test('callback should be called', async () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Hello" updateStatus={mockCallback} />);
        const root = component.root.instance;
        root.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
